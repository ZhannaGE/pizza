import { configureStore } from '@reduxjs/toolkit';
import filter from "./slices/filterSlice";
import cart from "./slices/cart/slice";
import pizza from "./slices/pizzasSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizza,
    },
})