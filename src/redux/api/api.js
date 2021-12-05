import axios from 'axios';
import { setUser } from '../authorizationReducer';

// const instance = axios.create({
//   withCredentials: true, //Авторизация
//   baseURL: 'https://test.kitactive.ru/',
//   headers: { 'API-KEY': 'eda5d71c-0b14-4748-b91d-1d58038a2065' },
// });

export const registration = async (email, password, name) => {
  try {
    const response = await axios.post(
      `https://test.kitactive.ru:8089/api/register`,
      {
        email,
        password,
        name,
      },
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://test.kitactive.ru:8089/api/login`,
        {
          email,
          password,
        },
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
};
