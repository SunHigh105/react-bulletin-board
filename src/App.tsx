import React, { FC } from 'react';
import { Button, Container, Header, Image, Menu } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

const App: FC = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo192.png' />
          Distance Matrix
        </Menu.Item>
      </Container>
    </Menu>
    <Container text style={{ marginTop: '7em' }}>
      <Switch>
        <Route path ='/' component={Home} exact />
        <Route path='/form' component={Form} />
      </Switch>
      
    </Container>
  </div>
);

export default App;
