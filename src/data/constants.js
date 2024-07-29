// const isProdCredential = import.meta.env.VITE_FIB_GATEWAY_ENVIRONMENT !== 'staging';
const isDeployed = import.meta.env.VITE_NODE_ENV !== 'development';

// const SERVER_BASE = isProdCredential ? 'fib.prod.fib.iq' : 'fib.stage.fib.iq';

const SERVER_BASE = isDeployed ? 'https://fib-stage-server.onrender.com/api' : 'http://localhost:3100/api';

export const ACCESS_TOKEN_URL = `${SERVER_BASE}/auth/realms/fib-online-shop/protocol/openid-connect/token`;
export const AUTH_TOKEN_URL = `${SERVER_BASE}/auth/realms/fib-personal-application/protocol/openid-connect/token`;
export const SSO_BASE_URL = `${SERVER_BASE}/auth/realms/fib-personal-application/protocol/openid-connect/auth`;
export const SSO_USER_DETAILS_URL = `${SERVER_BASE}/protected/v1/sso-user-details`;
export const PAYMENTS_BASE_URL = `${SERVER_BASE}/protected/v1/payments`;
