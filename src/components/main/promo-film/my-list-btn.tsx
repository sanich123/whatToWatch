import '../../common/play-btn/play-styles.css';

export default function MyListBtn(): JSX.Element {
  return (
    <button className="btn film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  );
}
