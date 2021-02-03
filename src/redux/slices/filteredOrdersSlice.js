import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const filteredOrdersSlice = createSlice({
    name: 'filteredOrders',
    initialState,
    reducers: {
        setFilteredOrders(state, action) {
            return {
                items: action.payload
            }
        }
    }

})