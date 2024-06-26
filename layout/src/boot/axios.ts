import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;