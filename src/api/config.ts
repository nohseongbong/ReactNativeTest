import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers = config.headers ?? {};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);
