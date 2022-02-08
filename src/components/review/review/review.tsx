/* eslint-disable no-console */
import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postComment } from '../../../store/async/async-with-thunks';
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
  const status = useSelector(({film}: RootState) => film.status);
  const [film] = useSelector(({movies}: RootState) => movies.films).filter(({id}) => id === +selected.id);
  const [text, setText] = useState('Review text');
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
    console.log(status);
    if (status === 'rejected') {
      setDisabled(false);
    } else if (status === 'fullfilled') {
      history.push(`/films/${id}`);
      setDisabled(false);
    }
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
