import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../utils/const';
import '../logo-footer-styles.css';
import Words from '../words/words';

export default function Logo({footer}: {footer?: boolean}): JSX.Element {

  return (
    <Link className={`logo__link ${footer && 'logo__link--light'}`} to={AppRoute.Main}>
      <Words />
    </Link>
  );
}
