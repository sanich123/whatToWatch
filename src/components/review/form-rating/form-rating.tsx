import React from 'react';
import './form-rating-styles.css';

interface FormRatingProps {
  setRating: (evt: string) => void,
  disabled: boolean,
}

export default function FormRating({setRating, disabled}: FormRatingProps): JSX.Element {

  return (
    <div className="rating">
      <div className="rating__stars">
        {[...Array(10).keys()].map((number) => number++).reverse().map((number) => (
          <React.Fragment key={number}>
            <input
              disabled={disabled}
              className="rating__input"
              id={`star-${number}`}
              type="radio" name="rating"
              onChange={({target}) => setRating(target.value)}
              value={number}
            />
            <label className="rating__label" htmlFor={`star-${number}`}>Rating {number}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
