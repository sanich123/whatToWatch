import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';
import './filters-styles.css';

interface FilterProps {
  name: string,
  filter: string,
  title: string,
  setFilter: (arg: string) => void
}

export default function Filter({name, filter, title, setFilter}: FilterProps) {

  return (
    <li className={`catalog__genres-item ${filter === title && 'catalog__genres-item--active'}`}>
      <Link
        title={name}
        onClick={() => setFilter(title)}
        to={AppRoute.Main}
        className="catalog__genres-link"
        tabIndex={0}
      >{name}
      </Link>
    </li>
  );
}
