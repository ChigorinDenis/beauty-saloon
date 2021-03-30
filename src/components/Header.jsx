import React from 'react';
import {
  Menu,
  Dropdown,
  Button,
  Icon,
  Image
} from 'semantic-ui-react';

const languageOptions = [
  { key: 'Russian', text: 'ru', value: 'Russian' },
  { key: 'English', text: 'eng', value: 'English' },
];

function Header() {
  return (
    <Menu>
        <Menu.Item header>
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxL2MzWgFtlLsTeATDADFb5Tbx4qlaHuu2g&usqp=CAU' size='tiny' />
        </Menu.Item>
        <Menu.Item
          name='О нас'
        />
        <Menu.Item
          name='Сервис'
        />
        <Menu.Item
          name='lang'
        >
          <Dropdown
            button
            className='icon'
            floating
            labeled
            icon='world'
            options={languageOptions}
            search
            text='lang'
          />
        </Menu.Item>
        <Menu.Item
          name='locations'
          position='right'
        >
          <Button basic color='purple'>
            <Icon name='sign-in' />
            LogIn
          </Button>
        </Menu.Item>
      </Menu>
  )
}

export default Header;