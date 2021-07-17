import React, { FC } from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './presentationals/pages/Home';
import { MenuItem } from './presentationals/modules/MenuItem';
import { NewPost } from './presentationals/pages/NewPost';
import { Search } from './presentationals/pages/Search';
import { MyPage } from './presentationals/pages/MyPage';
import { SigninContainer } from '../components/containers/Signin';
import { Signup } from './presentationals/pages/Signup';
import { RegistVideoPlaylistContaniner } from './containers/RegistVideoPlaylist';

export interface AppProps {
  user?: { user_id: string, name: string },
  handleLogout?: () => void;
}

export const App: FC<AppProps> = ({
  user = { user_id: '', name: '' },
  handleLogout = () => {},
}) => (
  <div>
    <Menu 
      as={Menu}
    >
      <Menu.Item header as={Link} to='/'>Random Training</Menu.Item>
      {/* <MenuItem isLoggedIn={ user.user_id !== '' && user.name !== ''} handleLogout={handleLogout} /> */}
      <Menu.Menu position='right'>
        <Input icon='search' placeholder='Search...' />
        {user.user_id !== ''
          ? 
          <div>
            <Menu.Item as={Link} to='/regist/video_playlist'>Regist</Menu.Item>
            <Menu.Item as={Link} to='/mypage'>MyPage</Menu.Item>
            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
          </div>
          :
          <div>
            <Menu.Item as={Link} to='/signin'>Signin</Menu.Item>
            <Menu.Item as={Link} to='/signup'>Signup</Menu.Item>
          </div>
        }
      </Menu.Menu>
    </Menu>
    <Container text style={{ marginTop: '2em' }}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newpost' exact component={NewPost} />
        <Route path='/search' component={Search} />
        <Route path='/regist/video_playlist' component={RegistVideoPlaylistContaniner} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/signin' component={SigninContainer} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Container>
  </div>
);

export default App;
