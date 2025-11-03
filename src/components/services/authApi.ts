// src/services/authApi.ts

import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utils/axiosBaseQuery";


// Define the Registration types locally because ../types/configureStore was not found
type RegistrationPayload = {
  email: string;
  password: string;
  name?: string;
};

type RegistrationResponse = {
  id: string;
  email: string;
  name?: string;
  token?: string;
};

// Сиздин Mokky.dev'деги негизги URL
const MOKKY_API_URL = "https://657fccc640a0bce8.mokky.dev";

// 3. API Service'ди түзүү
export const authApi = createApi({
  // Redux store'догу аты
  reducerPath: "authApi",

  // Axios'ту колдонуу үчүн Custom Base Query'ди колдонуу
  baseQuery: axiosBaseQuery({ baseUrl: MOKKY_API_URL }),

  // 4. API Endpoint'терин аныктоо
  endpoints: (builder) => ({
    // Регистрация үчүн мутация (POST сурам)
    // <Жооптун_Тиби, Жөнөтүлүүчү_Маалыматтын_Тиби>
    // src/services/authApi.ts ичинде
    registerUser: builder.mutation<RegistrationResponse, RegistrationPayload>({
      query: (userData: RegistrationPayload) => ({
        // 👈 Типти көрсөтүүнүн кереги жок
        url: "register",
        method: "POST",
        data: userData,
      }),
    }),

    // 💡 Эгер кийинчерээк Login керек болсо, бул жерге кошосуз:
    // loginUser: builder.mutation<LoginResponse, LoginPayload>({
    //   query: (credentials) => ({
    //     url: 'auth', // Мисалы, /auth endpoint'и
    //     method: 'POST',
    //     data: credentials,
    //   }),
    // }),

    // 💡 Эгер GET сурамы керек болсо, бул жерге кошосуз:
    // getUserDetails: builder.query<User, string>({
    //   query: (userId) => ({
    //     url: `users/${userId}`,
    //     method: 'GET',
    //   }),
    // }),
  }),
});

// 5. Компоненттерде колдонуу үчүн generated hook'тарды экспорттоо
// 'registerUser' -> 'useRegisterUserMutation' болуп аталат
export const { useRegisterUserMutation } = authApi;
