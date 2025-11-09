import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://657fccc640a0bce8.mokky.dev/cars";

export interface Car {
    id: number;
    model: string;
    price: string;
    year: string;
    country: string;
}

export type CreateCarBody = Omit<Car, 'id'>;

export type UpdateCarBody = Car; 

interface CarState {
    cars: Car[];
}

const initialState: CarState = {
    cars: [],
};


export const getCars = createAsyncThunk<Car[]>( 
    "car/getCars", 
    async () => {
        const request = await axios.get(BASE_URL);
        return request.data as Car[];
    }
);

export const deleteCar = createAsyncThunk<number, number>( 
    "car/deleteCars", 
    async (id) => {
        await axios.delete(`${BASE_URL}/${id}`);
        return id;
    }
);

export const createCar = createAsyncThunk<Car, CreateCarBody>( 
    "car/createCar", 
    async (body) => {
        const response = await axios.post(BASE_URL, body);
        return response.data as Car;
    }
);

export const updateCar = createAsyncThunk<Car, UpdateCarBody>( 
    "car/updateCar", 
    async (body) => {
        const response = await axios.patch(`${BASE_URL}/${body.id}`, body); 
        return response.data as Car;
    }
);

export const carApi = createSlice({
    name: "car",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
            state.cars = action.payload;
        });
        builder.addCase(deleteCar.fulfilled, (state, action: PayloadAction<number>) => {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        });
        builder.addCase(createCar.fulfilled, (state, action: PayloadAction<Car>) => {
            state.cars.push(action.payload); 
        });
           builder.addCase(updateCar.fulfilled, (state, action: PayloadAction<Car>) => {
            const updatedCar = action.payload;
            const index = state.cars.findIndex(car => car.id === updatedCar.id);
            if (index !== -1) {
                state.cars[index] = updatedCar;
            }
        });
    },
});

export const carApiActions = carApi.actions;