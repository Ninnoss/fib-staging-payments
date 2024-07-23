import { jwtDecode } from 'jwt-decode';

export const decodeIdToken = (idToken) => {
  try {
    return jwtDecode(idToken);
  } catch (error) {
    console.error('Error decoding ID token:', error);
    return null;
  }
};
