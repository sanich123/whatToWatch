import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useGetFilmQuery, usePostCommentMutation } from '../../../store/slices/films-api/films-api';
import { adaptFilm } from '../../../utils/adapter/adapter';
import Loader from '../../common/loader/loader';
import Logo from '../../common/header/logo/logo';
import UserMenu from '../../common/authorization/user-menu/user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FormRating from '../form-rating/form-rating';
import TextArea from '../form-text/text-area';
import './review-styles.css';
import { errorHandler } from '../../../utils/utils';
import { serverPath } from '../../../utils/const';

export default function AddReview() {
  const selected: {id: string} = useParams();
  const history = useHistory();
  const { data: film, isLoading } = useGetFilmQuery(selected.id);
  const [sendComment, {isSuccess, error, isLoading: isCommentSending}] = usePostCommentMutation();

  const [text, setText] = useState('Review text');
  const [rating, setRating] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (isCommentSending) {
      setDisabled(true);
    }
    if (isSuccess) {
      setDisabled(false);
      history.push(`/${serverPath.films}/${selected.id}`);
    }
    if (error) {
      setDisabled(false);
      errorHandler(error);
    }
  }, [history, selected.id, isSuccess, isCommentSending, error]);

  if (isLoading) {return <Loader/>;}

  const {backgroundImage, name, posterImage, id} = adaptFilm(film);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    setDisabled(true);
    await sendComment({
      body: {
        rating: +rating,
        comment: text,
      },
      id: selected.id,
    }).unwrap();
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
          <UserMenu id={id}/>
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
