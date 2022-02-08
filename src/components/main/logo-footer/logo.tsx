import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';
import './logo-footer-styles.css';
import Words from './words';

export default function Logo(): JSX.Element {

  return (
    <Link className="logo__link" to={AppRoute.Main}>
      <Words />
    </Link>
  );
}
