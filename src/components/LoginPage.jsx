import React, {useContext} from 'react';
import { Button, Checkbox, Form, Grid, Message } from 'semantic-ui-react'
import { useFormik } from 'formik';
import axios from 'axios';
import authContext from '../contexts/authContex';
import routes from '../routes';
import { Redirect } from 'react-router-dom';


const LoginPage = () => {
  const auth = useContext(authContext);
  const handleSubmit =  async () => {
    const data =  {
      usernameOrEmail: 'user',
      password: '19801980'
    };
    try {
      const url = routes['logIn']();
      const response = await axios.post(url, data);
      localStorage.setItem('userId', JSON.stringify(response.data));
      auth.logIn();
      return <Redirect to='/' />
    } catch(e) {
      console.log('Error', e);
    }
  };
  const handleMandle = async () => {
    try {
      const { accessToken, tokenType } = JSON.parse(localStorage.getItem('userId') || '');
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8080/api/material/all',
        headers: {
          'Authorization': `${tokenType} ${accessToken}`,
        }
      })
      console.log(response.data);
    } catch(e) {
      console.log('Error', e);
    }
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: handleSubmit
  });
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
      <Button 
        type='submit'
        onClick={handleMandle}
        fluid
      >
        Получить материалы
      </Button>
    </Grid.Row>
  </Grid>
  )
};

export default LoginPage;