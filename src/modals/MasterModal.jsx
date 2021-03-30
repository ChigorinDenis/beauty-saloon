import React from "react";
import {
  Button,
  List,
  Form,
  Modal,
  Image,
  Card,
  Label,
  Header,
  Rating,
  Checkbox, 
  Icon
} from "semantic-ui-react";

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      closeIcon
      size="mini"
      trigger={<Button>LogIn</Button>}
    >
      <Modal.Header>Запись к мастеру</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label htmlFor="date">Дата записи</label>
            <input placeholder="First Name" type="date" />
          </Form.Field>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                circular
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>
                Master makeup
                <Rating icon="star" defaultRating={3} maxRating={4} />
              </Card.Meta>
              <Card.Description>
                Steve is proffessional makeup master      
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Header as="h5" color="purple">
                Доступное время
              </Header>
              <Label.Group>
                <Label as="a" basic>
                  09:00
                </Label>
                <Label as="a" basic color="purple">
                  10:00
                </Label>
                <Label as="a" basic>
                  11:00
                </Label>
                <Label as="a" basic color="purple">
                  12:00
                </Label>
                <Label as="a" color="purple">
                  13:00
                </Label>
              </Label.Group>
            </Card.Content>
          </Card>
          <Header 
            as='h5'
          >
            Выберите дополнительные опции
          </Header>
          <List divided verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                +300р 
              </List.Content>
                <Checkbox label='Покрытие лаком' />
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                +200р
              </List.Content>
              <Checkbox label='Добавить блестки' />
            </List.Item>
          </List>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Забронировать"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          color="purple"
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
