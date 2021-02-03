import React, { FC } from 'react';
import { Header, Menu, Sidebar, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './presentationals/pages/Home';
import { NewPost } from './presentationals/pages/NewPost';
import { Search } from './presentationals/pages/Search';
import { MyPage } from './presentationals/pages/MyPage';

const App: FC = () => (
  <div>
    <Sidebar 
      as={Menu}
      animation='push'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as={Link} to='/search'>Search</Menu.Item>
      <Menu.Item as={Link} to='/mypage'>MyPage</Menu.Item>
    </Sidebar>
    <Container text style={{ marginTop: '2em' }}>
      <Header as='h1'>Bulletin Board</Header>
      <Container>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/newpost' exact component={NewPost} />
          <Route path='/search' component={Search} />
          <Route path='/mypage' component={MyPage} />
        </Switch>
      </Container>
    </Container>
  </div>
);

export default App;
