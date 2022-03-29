import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { tabs } from '../../../../utils/const';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../comments/reviews/comments';
import './film-desc-styles.css';
import { Film } from '../../../../types/types';

interface FilmDescProps {
  film: Film,
  id: number
}

function FilmDesc({film, id}: FilmDescProps) {
  const [activeTab, setActiveTab] = useState(tabs.overView);

  return (
    <div className="film-card__desc">
      <nav className="film-card__nav">
        <ul className="film-nav__list">
          {Object.values(tabs).map((part) => (
            <li className={`film-nav__item ${activeTab === part ?  'film-nav__item--active' : ''}`} key={part}>
              <Link
                onClick={() => setActiveTab(part)}
                to={`/films/${id}`}
                className="film-nav__link"
              >{part}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === tabs.overView && <Overview film={film} />}
      {activeTab === tabs.details && <Details film={film} />}
      {activeTab === tabs.reviews &&  <Reviews movie={film} />}
    </div>
  );
}

export default memo(FilmDesc);
