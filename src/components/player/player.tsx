import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../types/types';
import Loader from '../common/loader/loader';
import './player-styles.css';

export default function Player():JSX.Element {
  const films = useSelector((state: RootState) => state.movies.films);
  const selected: {id: string} = useParams();
  const history = useHistory();

  useEffect(() => {
    const onKeyDownEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        history.goBack();
      }
    };

    document.addEventListener('keydown', onKeyDownEsc);
    return () => {
      document.removeEventListener('keydown', onKeyDownEsc);
    };

  }, [history]);

  if (films.length === 0) {
    return <Loader />;
  }

  const [{videoLink, posterImage}] = films.filter(({id}) => id === +selected.id);

  return (
    <div className="player">

      <video src={videoLink} className="player__video" poster={posterImage} autoPlay muted />
      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      {/* <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

