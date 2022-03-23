interface EmailInputProps {
  email: string,
  setEmail: (arg: string) => void,
}

export default function EmailInput({email, setEmail}: EmailInputProps) {

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
      />
      <label className="visually-hidden" htmlFor="user-email">Email address</label>
    </div>
  );
}
