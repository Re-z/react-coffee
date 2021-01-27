import {createSlice} from "@reduxjs/toolkit";

const initialState = false;

export const ordersPreloaderSlice = createSlice({
    name: 'ordersPreloader',
    initialState,
    reducers: {
        showOrdersPreloader(state) {
            return state = true
        },
        hideOrdersPreloader(state) {
            return state = false
        }
    }
});