import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { Config } from './keys';

const headers = {
  Accept: 'application/json',
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: Config.serverApiUrl,
  headers,
});

export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
};
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
