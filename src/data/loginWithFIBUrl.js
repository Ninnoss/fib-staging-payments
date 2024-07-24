import { APP_URL } from '../utils/getServer';
import { SSO_BASE_URL } from './constants';

const responseType = 'code';
const clientId = 'sso-isic-registration';
const scope = 'openid';
const redirectUri = APP_URL;

const queryParams = new URLSearchParams({
  response_type: responseType,
  client_id: clientId,
  scope: scope,
  redirect_uri: redirectUri,
}).toString();

export const loginWithFIBUrl = `${SSO_BASE_URL}?${queryParams}`;
