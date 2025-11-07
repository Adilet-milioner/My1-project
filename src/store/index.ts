import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "@/components/services/carApi";

export const store = configureStore({
    reducer: {
        car: carApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;