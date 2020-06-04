import axios from 'axios';

export default axios.create({
  baseURL: 'https://gorest.co.in/public-api',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer FRdRtwQDq9yrCqpCqP6376ufKK_W47U8d_R_',
  },
});
