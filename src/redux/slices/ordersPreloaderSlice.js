import {createSlice} from "@reduxjs/toolkit";

const initialState = false;

export const ordersPreloaderSlicePath =  'ordersPreloader';

export const ordersPreloaderSlice = createSlice({
    name: ordersPreloaderSlicePath,
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