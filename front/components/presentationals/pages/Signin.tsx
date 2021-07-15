import React, { FC, FormEvent } from 'react';
import { Header, Container, Form, Button } from 'semantic-ui-react';
import { SigninFormParams } from '../../../services/signin'; 

export type SigninFormValues = SigninFormParams;

export interface SigninFormProps {
  handleChange?: (targetName: string, newValue: string) => void;
  handleSignin?: (event: FormEvent<HTMLFormElement>) => void;
  values?: SigninFormValues,
}

export const Signin: FC<SigninFormProps> = ({
  handleChange = () => {},
  handleSignin = () => {},
  values = { email: '', password: '' },
}) => (
  <div>
    <Header as='h2'>Signin</Header>
    <Container>
      <Form onSubmit={handleSignin}>
        <Form.Field>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', String(e.target.value))}
            value={values.email}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input 
            type="password"
            name="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('password', String(e.target.value))}
          />
        </Form.Field>
        <Button style={{ marginTop: '1em' }} type='submit'>Signin</Button>
      </Form>
    </Container>
  </div>
);
