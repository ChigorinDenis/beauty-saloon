import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClientRolePage from './roles/ClientRolePage';
import AdminRolePage from './roles/AdminRolePage'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/admin">
            <AdminRolePage />
          </Route>
          <Route path="/">
            <ClientRolePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
