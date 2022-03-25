import { memo } from 'react';
import { Link } from 'react-router-dom';

function AddReviewBtn({id}: {id: number}) {

  return (
    <Link to={`/films/${id}/review`} className="btn film-card__button">
      Add review
    </Link>
  );
}

export default memo(AddReviewBtn);
