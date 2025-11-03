// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
// authApi кызматын импорттоо
import { authApi } from '../services/authApi'; 

// 1. Redux Store'ду конфигурациялоо
export const store = configureStore({
  // 2. Reducers'ди аныктоо
  reducer: {
    // [authApi.reducerPath] бул 'authApi' деген сапты берет.
    // Бул жерге бардык API'лердин state'тери кошулат.
    [authApi.reducerPath]: authApi.reducer,
    
    // 💡 Эгер башка Redux Slice'тер болсо, бул жерге кошулат:
    // cart: cartReducer,
    // user: userReducer,
  },
  
  // 3. Middleware'ди кошуу
  // RTK Query туура иштеши үчүн API'дин middleware'ин кошуу керек.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // RTK Query'дин middleware'ин кошуу
      .concat(authApi.middleware),
});

// 4. Store'дун RootState жана AppDispatch типтерин экспорттоо
// Бул типтерди React компоненттеринде туура typization үчүн колдонобуз.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;