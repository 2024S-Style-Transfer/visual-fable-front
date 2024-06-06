import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/*export const testclient = axios.create({
  baseURL: 'https://9e7dae8f-b4f3-49b1-a205-b8efed9ee705.mock.pstmn.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});*/