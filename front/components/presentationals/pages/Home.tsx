import React from 'react';
import { Header, Pagination, Container, Comment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    <Header as='h2'>Home</Header>
    <Container>
      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/minisheep.png' />
          <Comment.Content>
            <Comment.Author>Sazanami</Comment.Author>
            <Comment.Metadata>
              2021/02/03 21:02
            </Comment.Metadata>
            <Comment.Text>
              Hey guys, I hope this example comment is helping you read this
              documentation.
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Container>
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={3}
      position='center'
    />
  </div>
);
