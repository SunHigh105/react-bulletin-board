import React, { FC } from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './presentationals/pages/Home';
import { NewPost } from './presentationals/pages/NewPost';
import { Search } from './presentationals/pages/Search';
import { MyPage } from './presentationals/pages/MyPage';

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
      </Menu.Menu>
    </Menu>
    <Container text style={{ marginTop: '2em' }}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newpost' exact component={NewPost} />
        <Route path='/search' component={Search} />
        <Route path='/mypage' component={MyPage} />
      </Switch>
    </Container>
  </div>
);

export default App;
