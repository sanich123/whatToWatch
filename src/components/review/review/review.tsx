/* eslint-disable no-console */
import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postComment } from '../../../store/async/async-thunks';
import { RootState } from '../../../types/types';
import Loader from '../../common/loader/loader';
import Logo from '../../main/logo-footer/logo';
import UserMenu from '../../main/user-menu/user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FormRating from '../form-rating/form-rating';
import TextArea from '../form-text/text-area';
import './review-styles.css';

export default function AddReview(): JSX.Element {
  const selected: {id: string} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [film] = useSelector(({movies}: RootState) => movies.films).filter(({id}) => id === +selected.id);
  const isSuccess = useSelector((state: RootState) => state.film.successSending);

  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [disabled, setDisabled] = useState(false);


  if (!film) {
    return <Loader />;
  }
  const {backgroundImage, name, posterImage, id} = film;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setDisabled(true);
    dispatch(postComment(selected.id, +rating, text));

    if (isSuccess) {
      history.push(`/films/${id}`);
    }

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
