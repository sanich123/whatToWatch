import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadComments } from '../../../../store/api/api-thunk';
import { Comment } from '../../../../types/types';
import { dateChanger } from '../../../../utils/utils';
import './comments-styles.css';

export default function Reviews({id}: {id: number}):JSX.Element {
  const dispatch = useDispatch();
  const reviews = useSelector(({film}: {film: {comments: Comment[]}}) => film.comments);

  useEffect(() => {
    dispatch(loadComments(`${id}`));
  }, [id, dispatch]);

  if (reviews.length === 0) {
    return <div></div>;
  }

  const [{user, rating, comment, date}] = reviews;


  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" dateTime={date}>{dateChanger(date)}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>

      </div>
    </div>

  );
}
