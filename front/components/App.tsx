import React, { FC } from 'react';
import { Menu, Sidebar, Container, Image } from 'semantic-ui-react'

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
      <Menu.Item as='a'>Home</Menu.Item>
      <Menu.Item as='a'>Search</Menu.Item>
      <Menu.Item as='a'>MyPage</Menu.Item>
    </Sidebar>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header href='/'>
          <Image size='mini' src='/logo192.png' />
          Bulletin Board
        </Menu.Item>
      </Container>
    </Menu>
    <Container text style={{ marginTop: '7em' }}>
      <div>Main Contents</div>
    </Container>
  </div>
);

export default App;
