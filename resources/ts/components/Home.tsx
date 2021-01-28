import React from 'react';
import { Button, Header } from 'semantic-ui-react';

const Home = () => (
  <div>
    <Header as='h1'>Distance Matrix</Header>
    <p>Search travel distance and time for a matrix of origins and destinations</p>
    <Button as='a' href='/form' primary>Start</Button>
  </div>
);

export default Home;
