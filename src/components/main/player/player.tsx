import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../../types/types';
import { getFormattedTime } from '../../../utils/formatters';
import Loader from '../../common/loader/loader';
import FullScreenBtn from './full-screen-btn';
import PlayBtn from './play-btn';
import './player-styles.css';

export default function Player():JSX.Element {
  const films = useSelector((state: RootState) => state.movies.films);
  const selected: {id: string} = useParams();
  const history = useHistory();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  const duration = videoRef.current?.duration;

  setInterval(
    ()=> {
      setCurrentTime(videoRef.current?.currentTime);
    }, 1000);

  useEffect(() => {
    const onKeyDownEsc =
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        history.goBack();
      }
    };
    const onKeyDownWhiteSpace =
    (evt: KeyboardEvent) => {
      if (evt.key === 'Space') {
        evt.preventDefault();
        videoRef.current?.play();
      }
    };
    document.addEventListener('keydown', onKeyDownEsc);
    document.addEventListener('keydown', onKeyDownWhiteSpace);

    return () => {
      document.removeEventListener('keydown', onKeyDownEsc);
      document.removeEventListener('keydown', onKeyDownWhiteSpace);
    };

  }, [history]);

  if (films.length === 0) {
    return <Loader />;
  }

  const [{videoLink, posterImage}] = films.filter(({id}) => id === +selected.id);

  return (
    <div className="player">
      {!canPlay && <Loader />}
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        style={canPlay ? {display: 'block'} : {display: 'none'}}
        poster={posterImage}
        autoPlay muted
        onCanPlay={() => setCanPlay(true)}
      />
      {canPlay && (
        <>
          <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress
                  className="player__progress"
                  value={currentTime}
                  max={duration}
                />
                <div
                  className="player__toggler"
                  style={{ left: `${currentTime && duration ? (currentTime / duration) * 100 : 0}%` }}
                >Toggler
                </div>

              </div>
              <div className="player__time-value">
                {getFormattedTime(duration, currentTime)}
              </div>
            </div>

            <div className="player__controls-row">
              <PlayBtn
                current={videoRef.current}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
              <div className="player__name">Transpotting</div>
              <FullScreenBtn
                current={videoRef.current}
              />
            </div>
          </div>
        </>

      )}

    </div>
  );
}

