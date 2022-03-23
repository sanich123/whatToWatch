interface PasswordInputProps {
  password: string,
  setPassword: (arg: string) => void,
}

export default function PasswordInput({password, setPassword}: PasswordInputProps) {
  return (
    <div className="sign-in__field">
      <input
        className="sign-in__input"
        type="password"
        placeholder="Password"
        name="user-password"
        id="user-password"
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />
      <label className="visually-hidden" htmlFor="user-password">Password</label>
    </div>
  );
}
