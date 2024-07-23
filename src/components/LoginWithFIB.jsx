import { Link } from 'react-router-dom';
import Button from './Button';

const LoginWithFIB = () => {
  const baseURL =
    'https://fib.stage.fib.iq/auth/realms/fib-personal-application/protocol/openid-connect/auth';
  const responseType = 'code';
  const clientId = 'sso-isic-registration';
  const scope = 'openid';
  const redirectUri = 'http://localhost:3000';

  const queryParams = new URLSearchParams({
    response_type: responseType,
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
  }).toString();

  const loginURL = `${baseURL}?${queryParams}`;

  return (
    <Link to={loginURL}>
      <Button>Login with FIB</Button>
    </Link>
  );
};

export default LoginWithFIB;
