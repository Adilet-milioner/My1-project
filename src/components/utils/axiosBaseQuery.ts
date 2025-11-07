
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';

interface AxiosErrorLike<T = unknown> {
  response?: {
    status?: number;
    data?: T;
  };
  message?: string;
}

interface ApiError {
  data?: unknown;
}

export interface AxiosBaseQueryArgs {
  url: string;
  method?: string; 
  data?: unknown;     
  params?: Record<string, unknown>; 
  headers?: Record<string, string>; 
}

 const axiosBaseQuery = ({ baseUrl = '' }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<
  AxiosBaseQueryArgs, 
  unknown,           
  ApiError           
> => async ({ url, method, data, params, headers }) => {
  try {
    const result = await axios({
      url: baseUrl + url, 
      method,
      data,
      params,
      headers,
    });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosErrorLike<ApiError['data']>;
    
    return {
      error: {
        status: err.response?.status || 500, 
        data: err.response?.data || { message: err.message || 'Тармак катасы' },
      },
    };
  }
};
export { axiosBaseQuery };