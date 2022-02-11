import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../utils/const';
import './../logo-footer-styles.css';
import Words from '../words/words';

export default function LogoFooter():JSX.Element {

  return (
    <Link to={AppRoute.Main} className="logo__link logo__link--light">
      <Words />
    </Link>
  );
}
