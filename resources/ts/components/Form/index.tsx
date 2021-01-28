import React from 'react';
import { Button, Container, Header, Input } from 'semantic-ui-react';

const Form = () => (
  <div>
    <Container>
      <Header as='h1'>Search</Header>
      <Input placeholder='Destination' />
      <Button>Delete</Button>
    </Container>
    <Button as='a' href='/map' primary>Search</Button>
  </div>
);

export default Form;
