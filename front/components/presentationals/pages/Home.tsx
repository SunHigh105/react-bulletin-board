import React from 'react';
import { Header, Menu, Container, Comment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { clickRedoBtn } from '../../../utils/click';

export const Home = () => (
  <div>
    <Header as='h2'>Home</Header>
    <Menu>
      <Menu.Item icon='angle double left' as='a' />
      <Menu.Item icon='redo alternate' as='a' onClick={clickRedoBtn} />
      <Menu.Item icon='angle double right' as='a' />
      <Menu.Menu position='right'>
        <Menu.Item icon='pencil alternate' as={Link} to='/newpost' />
      </Menu.Menu>
    </Menu>
    <Container>
      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/minisheep.png' />
          <Comment.Content>
            <Comment.Author>Sazanami</Comment.Author>
            <Comment.Metadata>
              2021/02/03 21:02
            </Comment.Metadata>
            <Comment.Text className="comment_text">
              Hey guys, I hope this example comment is helping you read this
              documentation.
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Container>
  </div>
);
