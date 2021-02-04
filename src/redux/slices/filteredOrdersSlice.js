import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const filteredOrdersSlicePath = 'filteredOrders';

export const filteredOrdersSlice = createSlice({
    name: filteredOrdersSlicePath,
    initialState,
    reducers: {
        setFilteredOrders(state, action) {
            return {
                items: action.payload
            }
        }
    }

})