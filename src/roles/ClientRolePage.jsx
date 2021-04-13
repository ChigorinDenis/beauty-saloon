import React from "react";
import '@brainhubeu/react-carousel/lib/style.css';
import { Grid, Header, Container } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Menu from "../components/Header";
import CardService from '../components/CardService';
import CustomCarousel from '../components/Carousel';
import ListMasters from '../components/ListMasters';
import MasterModal from '../modals/MasterModal';
import ServiceModal from '../modals/ServiceModal'
import LoginPage from '../components/LoginPage';

const services = [
  {
    image: 'haircut1',
    header: 'haircut1'
  },
  {
    image: 'haircut2',
    header: 'haircut2'
  },
  {
    image: 'haircut3',
    header: 'haircut3'
  },
  {
    image: 'haircut3',
    header: 'mencuts2'
  } 
];
function ClientRolePage() {
  return (
    <>
      <MasterModal />
      <ServiceModal />
      <Router>
      <Menu />       
       
          <Switch>
          <Route exact path='/'>
            <Container text
              color='black'
              style={{'min-height': '100px'}}
            >

            </Container>
            <Grid container>
              <h1>Добро пожаловать</h1>
              {/* <CustomCarousel /> */}
              <Grid.Row>
                {services.map((service) => {
                  return (
                  <Grid.Column computer={4} tablet={8} mobile={16}>
                    <CardService image={service.image} header={service.header}/>
                  </Grid.Column>
                  );
                })
                }
              </Grid.Row>
              <Header as='h4' color='violet'>Masters</Header>
              <Header as='h4' color='grey'>See All</Header>
              <Grid.Row>
                <Grid.Column>
                  <ListMasters />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default ClientRolePage;