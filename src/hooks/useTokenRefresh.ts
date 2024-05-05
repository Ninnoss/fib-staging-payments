import { useEffect } from 'react';
import fetchAccessToken from '../utils/fetchAccessToken';

const useTokenRefresh = () => {
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const token = await fetchAccessToken();
        window.sessionStorage.setItem('access_token', token);
      } catch (error) {
        console.error('Error refreshing access token:', error);
      }
    };

    refreshToken();
    const intervalId = setInterval(refreshToken, 50 * 1000);

    return () => clearInterval(intervalId);
  }, []);
};

export default useTokenRefresh;
