import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListMasters = () => (
  <List horizontal size='big' selection> 
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
      <List.Content>
        <List.Header>Лиза</List.Header>
        Makeup master
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>Ann</List.Header>
        Hair master
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <List.Content>
        <List.Header>Daria</List.Header>
         Masage
      </List.Content>
    </List.Item>
  </List>
)

export default ListMasters;