import React from 'react';
import { Header, Container, Form, Button } from 'semantic-ui-react';

export const Signup = () => (
  <div>
    <Header as='h2'>Signup</Header>
    <Container>
      <Form>
        {/* <Form.Field>
          <label>Mail address</label>
          <input type="text" />
        </Form.Field> */}
        <Form.Field>
          <label>ID</label>
          <input type="text" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Form.Field>
          <label>Password (Confirm)</label>
          <input type="password" />
        </Form.Field>
      </Form>
      <Button style={{ marginTop: '1em' }} type='submit'>Singup</Button>
    </Container>
  </div>
);
