import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabs } from '../../../../utils/const';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../comments/comments';
import './film-desc-styles.css';
import { FilmDescProps } from '../../../../types/types';

export default function FilmDesc({description, rating, director, runTime, starring, id, released, genre}: FilmDescProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabs.overView);

  return (
    <div className="film-card__desc">
      <nav className="film-card__nav">
        <ul className="film-nav__list">
          {Object.values(tabs).map((part) => (
            <li className={`film-nav__item ${activeTab === part && 'film-nav__item--active'}`} key={part}>
              <Link onClick={() => setActiveTab(part)} to={`/films/${id}`} className="film-nav__link">{part}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === tabs.overView && <Overview description={description} rating={rating} director={director} runTime={runTime} starring={starring} />}
      {activeTab === tabs.details && <Details released={released} genre={genre} director={director} runTime={runTime} starring={starring} />}
      {activeTab === tabs.reviews &&  <Reviews id={id} />}
    </div>
  );
}
