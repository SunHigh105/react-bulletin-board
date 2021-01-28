import React from 'react';
import { Header, List } from 'semantic-ui-react';

const Map = () => (
  <div>
    <Header as='h1'>Distances</Header>
    <List divided relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Destination1</List.Header>
          <List.Description>hogehogehoge</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default Map;
