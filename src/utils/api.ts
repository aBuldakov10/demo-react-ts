import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
// import { Error } from './types/common';
// import { errorHandler } from './functions';

export const api = axios.create({ baseURL: 'http://0.0.0.0:8000/' });

api.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

api.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError<Error>) => {
    console.log(error, 'error');
    // errorHandler(error)
  }
);
