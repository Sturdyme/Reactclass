import { configureStore } from "@reduxjs/toolkit";
import reducer from "./CounterSlice";
import counterReducer from './CounterSlice'


const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;