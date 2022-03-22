import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useGetFilmQuery } from '../../../../store';
import { adaptFilm } from '../../../../utils/adapter/adapter';
import { getFormattedTime } from '../../../../utils/formatters/formatters';
import { errorHandler } from '../../../../utils/utils';
import Loader from '../../../common/loader/loader';
import FullScreenBtn from '../full-screen-btn/full-screen-btn';
import PlayBtn from '../play-btn/play-btn';
import './player-styles.css';

export default function Player() {
  const selected: {id: string} = useParams();
  const { data: film, isLoading, error } = useGetFilmQuery(selected.id);
  const history = useHistory();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  const duration = videoRef.current?.duration;
  const position = `${currentTime && duration ? (currentTime / duration) * 100 : 0}%`;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(videoRef.current?.currentTime);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    const onKeyDownEsc =
    (evt: KeyboardEvent) => {
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

  if (isLoading) {
    return <Loader />;
  }
  error && errorHandler(error);

  const {videoLink, posterImage} = adaptFilm(film);

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
                  style={{ left: position }}
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

