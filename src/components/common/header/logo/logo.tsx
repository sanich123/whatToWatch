import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, symbols } from '../../../../utils/const';
import '../logo-footer-styles.css';

function Logo({footer}: {footer?: boolean}) {

  return (
    <Link
      className={`logo__link ${footer && 'logo__link--light'}`}
      to={AppRoute.Main}
    >
      {symbols.map((symbol, index) => (
        <span key={symbol.toString()} className={`logo__letter logo__letter--${index + 1}`}>{symbol}</span>
      ))}
    </Link>
  );
}

export default memo(Logo);
