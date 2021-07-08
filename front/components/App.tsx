import React, { FC } from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './presentationals/pages/Home';
import { NewPost } from './presentationals/pages/NewPost';
import { Search } from './presentationals/pages/Search';
import { MyPage } from './presentationals/pages/MyPage';
// import { Signin } from './presentationals/pages/Signin';
import { SigninContainer } from '../components/containers/Signin';
import { Signup } from './presentationals/pages/Signup';

const App: FC = () => (
  <div>
    <Menu 
      as={Menu}
    >
      <Menu.Item header as={Link} to='/'>Photo Gallery</Menu.Item>
      <Menu.Menu position='right'>
        <Input icon='search' placeholder='Search...' />
        <Menu.Item icon='cloud upload' as={Link} to='/newpost' />
        <Menu.Item as={Link} to='/mypage'>MyPage</Menu.Item>
        <Menu.Item as={Link} to='/signin'>Signin</Menu.Item>
        <Menu.Item as={Link} to='/signup'>Signup</Menu.Item>
      </Menu.Menu>
    </Menu>
    <Container text style={{ marginTop: '2em' }}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newpost' exact component={NewPost} />
        <Route path='/search' component={Search} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/signin' component={SigninContainer} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Container>
  </div>
);

export default App;
