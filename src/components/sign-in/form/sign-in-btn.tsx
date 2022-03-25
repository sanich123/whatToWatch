import { memo } from 'react';

function SignInBtn() {

  return (
    <button className="sign-in__btn" type="submit">
      Sign in
    </button>
  );
}
export default memo(SignInBtn);
