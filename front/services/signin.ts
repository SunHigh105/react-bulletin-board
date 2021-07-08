import { createAxiosInstance } from "./common";
import { ApiConfig } from "./common";
import { User } from './models';

export interface SigninFormParams {
  name: string,
  password: string,
}

export const getUser = async (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);
  
  try {
    const res = await instance.get('/api/user');
    console.log('login succeed');
    return res.data;
  } catch (e) {
    console.log(e);
  }
}


export const signin = async (user?: User, optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  try {
    const tokenRes = await instance.get('/sanctum/csrf-cookie');
    const userRes = await instance.post('/api/login', user);
    return {token: tokenRes, user: userRes, isError: false};
  } catch (e) {
    console.log(e);
    return { token: '', user: '', isError: true};
  }
}

export const logout = async (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  try {
    const res = instance.get('/api/logout');
    return res;
  } catch (e) {
    console.log(e);
  }
}
