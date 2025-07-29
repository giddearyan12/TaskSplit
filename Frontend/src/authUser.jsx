import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthUserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUser = localStorage.getItem('token');
    return storedUser ? storedUser : null;
  });

  useEffect(() => {
    if (authUser) {
      localStorage.setItem('token', JSON.stringify(authUser));
    } else {
      localStorage.removeItem('token');
    }
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUser = () => useContext(AuthUserContext);