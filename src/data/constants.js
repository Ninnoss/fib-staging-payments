const isProduction = import.meta.env.VITE_NODE_ENV !== 'development';
let domain = isProduction ? 'fib.prod.fib.iq' : 'fib.stage.fib.iq';
domain = 'fib.stage.fib.iq'; // keeping this at stage because we are using test credentials. Remove this when going to prod

export const ACCESS_TOKEN_URL = `https://${domain}/auth/realms/fib-online-shop/protocol/openid-connect/token`;
export const AUTH_TOKEN_URL = `https://${domain}/auth/realms/fib-personal-application/protocol/openid-connect/token`;
export const SSO_BASE_URL = `https://${domain}/auth/realms/fib-personal-application/protocol/openid-connect/auth`;
export const SSO_USER_DETAILS_URL = `https://${domain}/protected/v1/sso-user-details`;
export const PAYMENTS_BASE_URL = `https://${domain}/protected/v1/payments`;
