import React, { FC } from 'react';
import { Button, Container, Header, Image, Menu } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Map from './Map';

const App: FC = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header href='/'>
          <Image size='mini' src='/logo192.png' />
          Distance Matrix
        </Menu.Item>
      </Container>
    </Menu>
    <Container text style={{ marginTop: '7em' }}>
      <Switch>
        <Route path ='/' component={Home} exact />
        <Route path='/form' component={Form} />
        <Route path='/map' component={Map} />
      </Switch>
      
    </Container>
  </div>
);

export default App;
