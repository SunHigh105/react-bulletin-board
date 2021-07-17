import React, { useState, useEffect, FC, FormEvent, SyntheticEvent } from 'react';
import { getUser, signin, logout } from '../../services/signin';
import { Signin } from '../presentationals/pages/Signin';
import { ApiConfig } from '../../services/common';

export const SigninContainer: FC = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  
  const handleChange = (
    targetName: string,
    newValue: string,
  ) => {
    setValues(v => ({ ...v, [targetName]: newValue }));
  };
  
  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    const res = await signin(values);
    console.log(res);
    if (res.isError) {
      alert('Login Failed.');
      return;
    }
    location.href = '/';
  };
  
  return (
    <Signin
      handleChange={handleChange}
      handleSignin={handleSignin}
      values={values}
    />
  );
}