import { useState } from 'react';
import { Link } from 'react-router-dom';
import { descParts } from '../../../utils/const';
import Details from './details/details';
import Overview from './overview/overview';
import Reviews from './comments/comments';
import './film-desc-styles.css';
import { FilmDescProps } from '../../../types/types';

export default function FilmDesc({description, rating, director, runTime, starring, id, released, genre}: FilmDescProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="film-card__desc">
      <nav className="film-card__nav">
        <ul className="film-nav__list">
          {descParts.map((part) => (
            <li className={`film-nav__item ${activeTab === part && 'film-nav__item--active'}`} key={part}>
              <Link onClick={() => setActiveTab(part)} to={`/films/${id}`} className="film-nav__link">{part}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === 'Overview' && <Overview description={description} rating={rating} director={director} runTime={runTime} starring={starring} />}

      {activeTab === 'Details' && <Details released={released} genre={genre} director={director} runTime={runTime} starring={starring} />}

      {activeTab === 'Reviews' &&  <Reviews id={id} />}

    </div>

  );
}
