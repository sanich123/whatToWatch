import { Comment } from '../../../../../types/types';
import React from 'react';
import { dateChanger } from '../../../../../utils/formatters/formatters';

export default function Review({reviews}: {reviews: Comment[]}) {

  return (
    <div className="film-card__reviews-col">
      {reviews.map(({comment, user, date, rating}) => (
        <React.Fragment key={comment}>
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
        </React.Fragment>
      ))}
    </div>
  );
}
