import { useHistory } from 'react-router-dom';
import './play-styles.css';

export default function PlayButton({id}: {id: number}) {
  const history = useHistory();

  return (
    <button
      className="btn film-card__button"
      type="button"
      onClick={() => history.push(`/player/${id}`)}
    >
      <svg
        viewBox="0 0 19 19"
        width="19"
        height="19"
      >
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
}
