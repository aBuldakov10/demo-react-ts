import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { message } from '@/utils/message';

interface ErrorType {
  message?: string;
  statusCode?: number;
}

/*** General ***/
// export const api = axios.create({ baseURL: 'http://0.0.0.0:8000/' });
export const api = axios.create({ baseURL: 'https://demo-react-be.onrender.com' });

api.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

api.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError<ErrorType>) => {
    message({
      title: (error.response?.data?.statusCode ?? 500).toString(),
      description: error.response?.data?.message,
      type: 'error',
    });

    throw new Error();
  }
);

/*** Todos ***/
export const todosApi = axios.create({ baseURL: 'https://todos-be-3371.onrender.com' });

todosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

todosApi.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError<ErrorType>) => {
    message({
      title: (error.response?.data?.statusCode ?? 500).toString(),
      description: error.response?.data?.message,
      type: 'error',
    });

    throw new Error();
  }
);
