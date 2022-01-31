import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../types/types';
import Loader from '../../common/loader/loader';
import Logo from '../../main/logo-footer/logo';
import UserMenu from '../../main/user-menu/user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FormRating from '../form-rating/form-rating';
import TextArea from '../form-text/text-area';
import './review-styles.css';

export default function AddReview(): JSX.Element {
  const films = useSelector((state: RootState) => state.movies.films);
  const selected: {id: string} = useParams();
  const [film] = films.filter(({id}) => id === +selected.id);
  const [, setText] = useState('');
  const [, setRating] = useState('');

  if (films.length === 0 || !film) {
    return <Loader />;
  }
  const {backgroundImage, name, posterImage, id} = film;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

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
          <FormRating setRating={setRating} />
          <TextArea setText={setText} />
        </form>
      </div>
    </section>
  );
}
