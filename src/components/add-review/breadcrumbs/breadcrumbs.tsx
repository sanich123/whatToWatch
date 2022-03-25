import { memo } from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs-styles.css';

function Breadcrumbs({id, name}: {id: number, name: string}) {

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}/review`} className="breadcrumbs__link" >Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Breadcrumbs);
