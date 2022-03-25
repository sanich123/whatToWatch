import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilmQuery } from '../../../store/slices/films-api/films-api';
import { adaptFilm } from '../../../utils/adapter/adapter';
import Loader from '../../common/loader/loader';
import Logo from '../../common/header/logo/logo';
import UserMenu from '../../common/authorization/user-menu/user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import './review-styles.css';
import { ReviewForm } from '../form/form';

export default function AddReview() {
  const selected: {id: string} = useParams();
  const { data: film, isLoading } = useGetFilmQuery(selected.id);

  if (isLoading) {return <Loader/>;}
  const {backgroundImage, name, posterImage, id} = adaptFilm(film);

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
          <UserMenu id={id}/>
        </header>

        <div className="film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm/>
      </div>
    </section>
  );
}
