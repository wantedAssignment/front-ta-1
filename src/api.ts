/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getComments = (_page = 1) =>
  api.get('/comments', { params: { _page, limit: 10 } });
