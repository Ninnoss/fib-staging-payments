import { useEffect, useState } from 'react';
import fetchAccessToken from '../utils/fetchAccessToken';

const useTokenRefresh = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const token = await fetchAccessToken();
        setAccessToken(token);
      } catch (error) {
        console.error('Error refreshing access token:', error);
      }
    };

    refreshToken();
    const intervalId = setInterval(refreshToken, 50 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return accessToken;
};

export default useTokenRefresh;
