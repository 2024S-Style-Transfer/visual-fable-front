import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

//FIXME: example Image API 테스트용 빌드시 제거
export const testclient = axios.create({
  baseURL: 'https://cda4a83b-0e18-443b-a847-adbbb6c61377.mock.pstmn.io/api',
  headers:{
    'Content-Type': 'application/json',
  }
});