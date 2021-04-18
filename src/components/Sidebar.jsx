import React from 'react'
import {
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar 
} from 'semantic-ui-react'
import UsersTablePage from '../pages/UsersTablePage';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

const SidebarCustom = () => (
  <Router>

    <Sidebar.Pushable as={Segment}  style={{height: '100vh'}}>
      <Sidebar
        as={Menu}
        animation='push'
        icon='labeled'
        vertical
        visible
        width='thin'
      >
        <Menu.Item as='a' >
          <Icon name='users' color='purple'/>
          Пользователи
        </Menu.Item>
        <Menu.Item as={NavLink} to='/login' >
          <Icon name='gamepad' color='purple' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' color='purple'/>
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <UsersTablePage />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Router>
)

export default SidebarCustom;