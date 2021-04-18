import React, { useState } from 'react'
import { Button, Icon, Table, Label } from 'semantic-ui-react'
import axios from 'axios';

const buildTagRole = (role) => {
  const buildLabel = (color, text) => (
    <Label
      color={color}
      horizontal
    >
      {text}
    </Label>
  )
  const mappingTagRole = {
    'ROLE_ADMIN': () => buildLabel('pink', 'админ'),
    'ROLE_MASTER': () => buildLabel('violet', 'мастер'),
    'ROLE_USER': () => buildLabel('teal', 'клиент'),
  };
  return mappingTagRole[role]();
}

const UsersTablePage = () => {
  const [users, setUsers] = useState([]);
  const handleSubmit = async () => {
    try {
      const { accessToken, tokenType } = JSON.parse(localStorage.getItem('userId') || '');
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8080/api/public/users',
        headers: {
          'Authorization': `${tokenType} ${accessToken}`,
        }
      });
      setUsers([...response.data]);
    } catch(e) {
      console.log('Error', e);
    }
  }
  return (
    <Table compact celled style={{ width: '80%'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Имя</Table.HeaderCell>
          <Table.HeaderCell>Логин</Table.HeaderCell>
          <Table.HeaderCell>e-mail</Table.HeaderCell>
          <Table.HeaderCell>Роль</Table.HeaderCell>
          <Table.HeaderCell>Активность</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users && users
        .map((user) => {
          const {
            id,
            name,
            username,
            email,
            role,
            active
            } = user;
          return (
            <Table.Row key={id}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell textAlign='center'>{buildTagRole(role)}</Table.Cell>
              <Table.Cell>{active}</Table.Cell>
            </Table.Row>
          );
        })
        }
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button
              floated='right'
              icon
              labelPosition='left'
              primary
              size='small'
              onClick={handleSubmit}
            >
              <Icon name='user' /> Add User
            </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>
              Approve All
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default UsersTablePage;