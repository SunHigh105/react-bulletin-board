import React from 'react';
import { Header, Container, Form, Button } from 'semantic-ui-react';

export const NewPost = () => (
  <div>
    <Header as='h2'>New Post</Header>
    <Container>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' />
        </Form.Field>
        <Form.TextArea label='Text'></Form.TextArea>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  </div>
);
