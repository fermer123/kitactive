import axios from 'axios';

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
  } catch (e) {
    console.log(response.data);
  }
};
