/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import useAuthCodeExchange from '../hooks/useAuthCodeExchange';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { tokenData, userData, error } = useAuthCodeExchange();
  const [authState, setAuthState] = useState({ tokenData: null, userData: null, error: null });

  useEffect(() => {
    if (tokenData || userData || error) {
      setAuthState({ tokenData, userData, error });
    }
  }, [tokenData, userData, error]);

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
