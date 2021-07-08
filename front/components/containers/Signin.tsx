import React, { useState, useEffect, FC, FormEvent, SyntheticEvent } from 'react';
import { getUser, signin, logout } from '../../services/signin';
import { Signin } from '../presentationals/pages/Signin';
import { ApiConfig } from '../../services/common';

export const SigninContainer: FC = () => {
  const [values, setValues] = useState({ name: '', password: '' });
  
  const handleChange = (
    targetName: string,
    newValue: string,
  ) => {
    setValues(v => ({ ...v, [targetName]: newValue }));
  };
  
  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
    const res = signin(values);
    console.log(res);
  };
  
  return (
    <Signin
      handleChange={handleChange}
      handleSignin={handleSignin}
      values={values}
    />
  );
}