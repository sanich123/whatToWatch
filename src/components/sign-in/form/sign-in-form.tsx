import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAvatar } from '../../../store/slices/authorization/authorization';
import { usePostAuthMutation } from '../../../store/slices/films-api/films-api';
import { RootState } from '../../../types/types';
import { AppRoute, warnings } from '../../../utils/const';
import { testingEmail, testingPassword } from '../../../utils/regexps/regexps';
import { saveToken } from '../../../utils/token';
import { errorHandler } from '../../../utils/utils';
import EmailInput from '../emailInput/email-input';
import PasswordInput from '../password-input/password-input';
import SignInBtn from './sign-in-btn';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const authStatus = useSelector(({ authorization }: RootState) => authorization.authStatus);

  const [loginPassSender, { error, data: response }] = usePostAuthMutation();

  useEffect(() => {
    error && errorHandler(error);
    if (response) {
      saveToken(response.token);
      dispatch(getAvatar(response['avatar_url']));
      history.push(AppRoute.Main);
    }
  }, [authStatus, history, dispatch, response, error]);

  const handleLogin = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!testingEmail.test(email)) {
      setWrongEmail(true);
      return;
    }
    if (!testingPassword.test(password)) {
      toast.warn(warnings.wrongPassword);
      return;
    }
    await loginPassSender({
      email: email,
      password: password,
    }).unwrap();
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={handleLogin}>
      <div
        className="sign-in__message"
        style={wrongEmail ? { display: 'block' } : { display: 'none' }}
      >
        <p>{wrongEmail && warnings.wrongEmail}</p>
      </div>
      <div className="sign-in__fields">
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
      </div>
      <div>
        <SignInBtn/>
      </div>
    </form>
  );
}

export default memo(SignInForm);
