import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changer } from '../../../store/slices/start';
import { AppRoute } from '../../../utils/const';
import './filters-styles.css';

interface FilterProps {
  name: string,
  filter: string,
  title: string,
}

export default function Filter({name, filter, title}: FilterProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <li className={`catalog__genres-item ${filter === title && 'catalog__genres-item--active'}`}>
      <Link
        title={name}
        onClick={() => dispatch(changer(title))}
        to={AppRoute.Main}
        className="catalog__genres-link"
      >{name}
      </Link>
    </li>
  );
}
