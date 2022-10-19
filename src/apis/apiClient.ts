import axios from 'axios';
import { API_TIMEOUT } from 'constants/common';

const apiClient = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

export default apiClient;
