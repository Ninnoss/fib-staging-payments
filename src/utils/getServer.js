const NODE_ENV = import.meta.env.VITE_NODE_ENV;
const localHost = import.meta.env.VITE_DEV_API;
const prod = import.meta.env.VITE_PROD_API;

export const APP_URL = NODE_ENV === 'development' ? localHost : prod;
