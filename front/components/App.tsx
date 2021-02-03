import React, { FC } from 'react';
import { Header, Menu, Sidebar, Container } from 'semantic-ui-react'

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
    <Container text style={{ marginTop: '2em' }}>
      <Header as='h1'>Bulletin Board</Header>
      <Menu>
        <Menu.Item icon='angle double left' as='a' />
        <Menu.Item icon='redo alternate' as='a' />
        <Menu.Item icon='angle double right' as='a' />
        <Menu.Menu position='right'>
          <Menu.Item icon='pencil alternate' as='a' />
        </Menu.Menu>
      </Menu>
      <Container>
        <Header as='h2'>Main Contents</Header>
      </Container>
    </Container>
  </div>
);

export default App;
