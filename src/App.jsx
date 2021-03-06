import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ClientRolePage from './roles/ClientRolePage';
import AdminRolePage from './roles/AdminRolePage';
import LoginPage from './components/LoginPage';
import useAuth from './hooks/auth.hook.js';
import authContext from './contexts/authContex.js';

export default function App() {
  const {
    loggedIn,
    logIn,
    logOut 
  } = useAuth();
  return (
    <authContext.Provider value={{ loggedIn, logIn, logOut }}>
      <Router>
        <Switch>
          <Route path='/' component={AdminRolePage} />
          <Route path='/login' >
             <LoginPage />
          </Route>
        </Switch>
      </Router>
    </authContext.Provider>
  );
}
