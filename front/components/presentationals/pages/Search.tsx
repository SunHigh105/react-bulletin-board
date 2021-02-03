import React from 'react';
import { Header, Container, Form, Dropdown, Button } from 'semantic-ui-react';

export const Search = () => (
  <div>
    <Header as='h2'>Search</Header>
    <Container>
      <Form>
        <Form.Field>
          <label>User Name</label>
          <input placeholder='User Name' />
        </Form.Field>
        <Form.Field>
          <label>Text</label>
          <input placeholder='Text' />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <Dropdown
            placeholder='year'
            openOnFocus
            selection
            options={years}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  </div>
);

const years = [
  { key: '2021', text: '2021', value: '2021' },
  { key: '2020', text: '2020', value: '2019' },
  { key: '2019', text: '2019', value: '2019' },
];
