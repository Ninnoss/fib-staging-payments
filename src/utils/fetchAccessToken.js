const fetchAccessToken = async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const tokenURL = import.meta.env.VITE_TOKEN_URL;

  const tokenResponse = await fetch(tokenURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}`,
  });

  if (!tokenResponse.ok) {
    throw new Error(`Error fetching access token: ${tokenResponse.status} - ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  // Check if the token is different before updating
  const currentToken = window.sessionStorage.getItem('access_token');
  if (accessToken !== currentToken) {
    window.sessionStorage.setItem('access_token', accessToken);
  }

  return accessToken;
};

export default fetchAccessToken;
