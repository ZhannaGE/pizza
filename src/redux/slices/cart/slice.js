import {createSlice} from "@reduxjs/toolkit";
import getCartFromLS from "../../../utils/getCartFromLS"
import calcTotalPrice from "../../../utils/calcTotalPrice";

const {items, totalPrice} = getCartFromLS();

const initialState = {
    totalPrice,
    items,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items);

        },
        minusItem(state, action){
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem){
                findItem.count--;
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearItems(state, action) {
            state.items = [];
            state.totalPrice = 0;
        },

    }
});

export const selectCart = (state) => state.cart;

export const {minusItem, addItem, removeItem, clearItems} = cartSlice.actions;

export default cartSlice.reducer;