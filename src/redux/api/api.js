import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true, //Авторизация
  baseURL: 'https://test.kitactive.ru/',
  headers: { 'API-KEY': 'eda5d71c-0b14-4748-b91d-1d58038a2065' },
});
