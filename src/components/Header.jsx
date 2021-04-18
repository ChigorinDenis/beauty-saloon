import React, { useContext } from 'react';
import {
  Menu,
  Button,
  Icon,
  Image
} from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import authContext from '../contexts/authContex.js';

const AuthButton = () => {
  const auth = useContext(authContext);

  return (
    auth.loggedIn
      ? (
        <Button
          basic
          color='purple'
          onClick={auth.logOut}
        >
          <Icon name='sign-out' />
          LogOut
        </Button>
      )
      : (
        <Button
          basic
          color='purple'
        >
          <Icon name='sign-in' />
          LogIn
        </Button>
      )
  );
};

function Header() {
  return (
      <Menu>
        <Menu.Item header>
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxL2MzWgFtlLsTeATDADFb5Tbx4qlaHuu2g&usqp=CAU' size='tiny' />
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to='/login'
          name='Галлерея'
        />
        <Menu.Item
          name='О нас'
        />
        <Menu.Item
          name='locations'
          position='right'
        >
          <AuthButton />
        </Menu.Item>
      </Menu>   
  )
}

export default Header;