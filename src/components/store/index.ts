// src/store/index.ts (Бириктирилген жана толук версия)

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";

export const store = configureStore({
  reducer: {
    // RTK Query'дин reducer'ин кошуу
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// TypeScript типтери
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// src/store/index.ts

// import { configureStore } from '@reduxjs/toolkit';
// // Сиздин API кызматын импорттоо
// import { authApi } from '../services/authApi';

// // Redux Store'ду конфигурациялоо
// export const store = configureStore({
//   reducer: {
//     // RTK Query'дин reducer'ин кошуу
//     [authApi.reducerPath]: authApi.reducer,
//   },

//   // RTK Query'дин middleware'ин кошуу (бул тармактык сурамдарды башкарат)
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware),
// });

// // TypeScript үчүн керектүү типтерди экспорттоо
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
