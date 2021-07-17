import React, {FC} from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { BrowserRouter as Link } from "react-router-dom";

// export interface MenuItemProps {
//   isLoggedIn?: boolean,
//   handleLogout?: () => void;
// }

export const MenuItem = (isLoggedIn = false, handleLogout = () => {}) => {
  if (isLoggedIn) {
    return (
      <Menu.Menu position='right'>
        <Input icon='search' placeholder='Search...' />
        <Menu.Item as={Link} to='/regist/video_playlist'>Regist</Menu.Item>
        <Menu.Item as={Link} to='/mypage'>MyPage</Menu.Item>
        <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
      </Menu.Menu>
    );
  }

  return (
    <Menu.Menu position='right'>
      <Input icon='search' placeholder='Search...' />
      <Menu.Item as={Link} to='/signin'>Signin</Menu.Item>
      <Menu.Item as={Link} to='/signup'>Signup</Menu.Item>
    </Menu.Menu>
  );
};
