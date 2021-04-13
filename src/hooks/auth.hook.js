import { useState } from 'react';

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => {
    setLoggedIn(true);
    console.log('loggedIn',loggedIn);
  };
  const logOut = () => {
    // localStorage.removeItem('userId');
    setLoggedIn(false);
  };
  return { 
    loggedIn,
    logIn,
    logOut 
  };   
};

export default useAuth;
