import { useContext } from 'react';
import authContext from '../contexts/authContex';

function privateRoute(Component) {
  const auth = useContext(authContext);
  const role = 'ROLE_ADMIN'
  return (props) => {
    if (auth.loggedIn && role === 'ROLE_ADMIN') {
      return <Component { ...props } />
    }
    return <Redirect
            to={{
              pathname: "/login",
             
            }}
          />
  }
}

export default privateRoute;