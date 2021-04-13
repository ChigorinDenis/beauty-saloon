import React, {useContext} from 'react';
import { Button, Checkbox, Form, Grid, Message } from 'semantic-ui-react'
import { useFormik } from 'formik';
import axios from 'axios';
import authContext from '../contexts/authContex';


const handleSubmit =  async () => {
  console.log('Submit pushed')
  const data =  {
    name: "Chigorin",
    username: "chigorin",
    email: "chigorin@bk.ru",
    password: "12345678"
  }
  try {
    const response = await axios.post('http://localhost:8080/api/auth/signup', data);
    console.log(response.data);
  } catch(e) {
    console.log('Error', e);
  }
  
}

const LoginPage = () => {
  const auth = useContext(authContext);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: handleSubmit
  })
  return (
    <Grid 
      container
      centered
    >
      <Grid.Row>
        <Grid.Column computer={8} tablet={12} mobil={16} >
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={formik.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={formik.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' fluid color='purple' >Submit</Button>
        </Form>
        <Message>
          Новый пользователь? <a href='#'>Регистрация</a>
        </Message>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
};

export default LoginPage;