import { useEffect, useState } from 'react';
import fetchAccessToken from '../utils/fetchAccessToken';

const useTokenRefresh = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const getNewAccessToken = async () => {
      try {
        const token = await fetchAccessToken();
        setAccessToken(token);
      } catch (error) {
        console.error('Error getting new access token:', error);
      }
    };

    getNewAccessToken();
    const intervalId = setInterval(getNewAccessToken, 50 * 1000); // 50 seconds, the token expires in a minute

    return () => clearInterval(intervalId);
  }, []);

  return accessToken;
};

export default useTokenRefresh;
