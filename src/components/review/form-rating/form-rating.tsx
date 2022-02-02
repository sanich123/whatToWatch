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
        {[...Array(10).keys()].map((e) => e + 1).reverse().map((e) => (
          <React.Fragment key={e}>
            <input disabled={disabled} className="rating__input" id={`star-${e}`} type="radio" name="rating" onChange={({target}) => setRating(target.value)} value={e} />
            <label className="rating__label" htmlFor={`star-${e}`}>Rating {e}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
