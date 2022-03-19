import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postComment } from '../../../store/async/async-with-thunks';
import { clearAll } from '../../../store/slices/film/film';
import { useGetFilmsQuery } from '../../../store/slices/films-api/films-api';
import { RootState } from '../../../types/types';
import { asyncConditions } from '../../../utils/const';
import Loader from '../../common/loader/loader';
import Logo from '../../common/logo/logo/logo';
import UserMenu from '../../main/user-menu/user-menu/user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FormRating from '../form-rating/form-rating';
import TextArea from '../form-text/text-area';
import './review-styles.css';

export default function AddReview(): JSX.Element {
  const selected: {id: string} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector(({film}: RootState) => film.status);
  const { data, isLoading } = useGetFilmsQuery(`9.react.pages.academy/wtw/films/${selected.id}`);

  const [text, setText] = useState('Review text');
  const [rating, setRating] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (status === asyncConditions.fullfilled) {
      history.push(`/films/${selected.id}`);
      dispatch(clearAll());
    }
  }, [status, history, selected.id, dispatch]);
  if (isLoading) {return <Loader/>;}

  const {backgroundImage, name, posterImage, id} = data;

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setDisabled(true);
    dispatch(postComment(selected.id, +rating, text));
    setDisabled(false);
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <Breadcrumbs id={id} name={name} />
          <UserMenu />
        </header>

        <div className="film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmit}>
          <FormRating disabled={disabled} setRating={setRating} />
          <TextArea disabled={disabled} text={text} rating={rating} setText={setText} />
        </form>
      </div>
    </section>
  );
}
