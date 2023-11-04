import axios from 'axios';

export const $instance = axios.create({
  baseURL: 'https://64ca452c700d50e3c7049c8c.mockapi.io/api',
});
