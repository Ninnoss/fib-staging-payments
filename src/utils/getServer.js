const NODE_ENV = import.meta.env.VITE_NODE_ENV;
const localHost = import.meta.env.VITE_DEV_APP;
const prod = import.meta.env.VITE_PROD_APP;

export const APP_URL = NODE_ENV === 'development' ? localHost : prod;
