import { memo } from 'react';

interface EmailInputProps {
  email: string,
  setEmail: (arg: string) => void,
}

function EmailInput({email, setEmail}: EmailInputProps) {

  return (
    <div className="sign-in__field">
      <input
        className="sign-in__input"
        type="email"
        placeholder="Email address"
        name="user-email"
        id="user-email"
        value={email}
        onChange={({target}) => setEmail(target.value)}
        tabIndex={0}
        autoComplete='true'
      />
      <label className="visually-hidden" htmlFor="user-email">Email address</label>
    </div>
  );
}

export default memo(EmailInput, (prev, next) => prev.email === next.email);
