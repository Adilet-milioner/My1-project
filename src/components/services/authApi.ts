import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utils/axiosBaseQuery";

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

const MOKKY_API_URL = "https://657fccc640a0bce8.mokky.dev/users";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: axiosBaseQuery({ baseUrl: MOKKY_API_URL }),

  endpoints: (builder) => ({
    registerUser: builder.mutation<RegistrationResponse, RegistrationPayload>({
      query: (userData) => ({
        url: "", 
        method: "POST",
        data: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
