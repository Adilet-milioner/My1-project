// src/utils/axiosBaseQuery.ts

import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';

// Local minimal AxiosError-like type to avoid depending on axios' exported types
interface AxiosErrorLike<T = unknown> {
  response?: {
    status?: number;
    data?: T;
  };
  message?: string;
}

// ApiError тибин ушул файлда аныктайбыз (сервердик ката формасы)
interface ApiError {
  data?: unknown;
}

// Base Query функциясына берилүүчү аргументтердин тиби
export interface AxiosBaseQueryArgs {
  url: string;
  method?: string; // 'GET', 'POST' ж.б.
  data?: unknown;     // POST/PUT сурамдары үчүн body
  params?: Record<string, unknown>; // GET сурамдары үчүн query params
  headers?: Record<string, string>; // Кошумча HTTP headers
}

// RTK Query'дин BaseQueryFn талабына ылайыктуу функцияны түзүү
 const axiosBaseQuery = ({ baseUrl = '' }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<
  AxiosBaseQueryArgs, // Киргизүү аргументтери (URL, method, data)
  unknown,           // Ийгиликтүү жооптун тиби (Response)
  ApiError           // Ката жообунун тиби (Error)
> => async ({ url, method, data, params, headers }) => {
  try {
    // Составление корректного полного URL — аккуратно объединяем baseUrl и url,
    // чтобы не получить "https://api.example.comregister" или "https://api.example.com//register".
    const normalizedBase = baseUrl ? String(baseUrl).replace(/\/$/, "") : "";
    const normalizedUrl = url ? String(url).replace(/^\//, "") : "";
    const fullUrl = normalizedBase ? `${normalizedBase}/${normalizedUrl}` : url;

    // Выполнение запроса через Axios
    const result = await axios({
      url: fullUrl,
      method,
      data,
      params,
      headers,
    });

    // Ийгиликтүү жоопту кайтаруу (RTK Query форматында)
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosErrorLike<ApiError['data']>;
    
    // Ката кеткенде RTK Query форматында кайтаруу
    return {
      error: {
        // HTTP статусун алуу (мисалы: 401, 404, 500)
        status: err.response?.status || 500, 
        // Серверден келген ката маалыматын же демейки билдирүүнү колдонуу
        data: err.response?.data || { message: err.message || 'Тармак катасы' },
      },
    };
  }
};
export { axiosBaseQuery };