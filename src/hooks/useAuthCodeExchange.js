import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { decodeIdToken } from '../utils/decodeIdToken';
import { AUTH_TOKEN_URL, SSO_USER_DETAILS_URL } from '../data/constants';
import { APP_URL } from '../utils/getServer';

const useAuthCodeExchange = () => {
  const location = useLocation();

  const [tokenData, setTokenData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const authorizationCode = queryParams.get('code');

    if (authorizationCode) {
      exchangeAuthorizationCodeForTokens(authorizationCode);
    }
  }, [location.search]);

  const exchangeAuthorizationCodeForTokens = async (authorizationCode) => {
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_FIB_SSO_CLIENT_ID,
      client_secret: import.meta.env.VITE_FIB_SSO_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: authorizationCode,
      redirect_uri: APP_URL,
    });

    try {
      const response = await fetch(AUTH_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error('Failed to exchange authorization code for tokens');
      }

      const data = await response.json();
      setTokenData(data);
      fetchUserData(data.access_token);
      // decode the id token to get basic user details from it
      if (data.id_token) {
        const decodedIdToken = decodeIdToken(data.id_token);
        console.log('Decoded ID Token:', decodedIdToken);
      }
    } catch (error) {
      setError(error);
      console.error('Error exchanging authorization code for tokens:', error);
    }
  };

  const fetchUserData = async (accessToken) => {
    try {
      const response = await fetch(SSO_USER_DETAILS_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      setError(error);
      console.error('Error fetching user details:', error);
    }
  };

  return { tokenData, userData, error };
};

export default useAuthCodeExchange;
