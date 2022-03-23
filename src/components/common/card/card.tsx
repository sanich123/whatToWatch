import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {debounce} from 'lodash';
import './card-styles.css';
import PreviewPlayer from '../video-player/player';

interface CardProps {
  name: string,
  previewImage: string,
  id: number,
  videoLink: string,
  posterImage: string,
}

export default function Card({name, previewImage, id, videoLink, posterImage}: CardProps) {
  const [mouseEnter, setIsMouseEnter] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    mouseEnter ? setPreview(true) : setPreview(false);
  }, [mouseEnter]);

  const debounced = debounce(() => setIsMouseEnter(true), 1000);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseLeave={() => {
        setIsMouseEnter(false);
        debounced.cancel();
      }}
      onMouseEnter={debounced}
      test-id='article'
    >
      <div className="small-film-card__image">
        {preview ?
          <PreviewPlayer
            videoLink={videoLink}
            posterImage={posterImage}
          /> :
          <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} tabIndex={0}>{name}</Link>
      </h3>
    </article>
  );
}


