import { memo } from 'react';

interface PasswordInputProps {
  password: string,
  setPassword: (arg: string) => void,
}

function PasswordInput({password, setPassword}: PasswordInputProps) {
  return (
    <div className="sign-in__field">
      <input
        className="sign-in__input"
        type="password"
        placeholder="Password"
        name="user-password"
        id="user-password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        tabIndex={0}
        autoComplete="true"
      />
      <label className="visually-hidden" htmlFor="user-password">
        Password
      </label>
    </div>
  );
}

export default memo(PasswordInput, (prevProps, nextProps) => prevProps.password === nextProps.password);
