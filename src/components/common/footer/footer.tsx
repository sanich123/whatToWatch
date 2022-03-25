import { memo } from 'react';
import Logo from '../header/logo/logo';

function Footer() {

  return (
    <footer>
      <Logo footer />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
