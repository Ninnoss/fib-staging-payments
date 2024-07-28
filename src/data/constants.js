const isProdCredential = import.meta.env.VITE_FIB_GATEWAY_ENVIRONMENT !== 'staging';
const domain = isProdCredential ? 'fib.prod.fib.iq' : 'fib.stage.fib.iq';

export const ACCESS_TOKEN_URL = `https://${domain}/auth/realms/fib-online-shop/protocol/openid-connect/token`;
export const AUTH_TOKEN_URL = `https://${domain}/auth/realms/fib-personal-application/protocol/openid-connect/token`;
export const SSO_BASE_URL = `https://${domain}/auth/realms/fib-personal-application/protocol/openid-connect/auth`;
export const SSO_USER_DETAILS_URL = `https://${domain}/protected/v1/sso-user-details`;
export const PAYMENTS_BASE_URL = `https://${domain}/protected/v1/payments`;
