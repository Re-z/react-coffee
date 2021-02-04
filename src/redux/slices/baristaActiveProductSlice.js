import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    product: null
}
export const baristaActiveProductSlicePath = 'baristaActiveProduct'

export const baristaActiveProductSlice = createSlice({
    name: baristaActiveProductSlicePath,
    initialState,
    reducers: {
        setBaristaActiveProduct(state, action) {
            state.product = action.payload
        }
    }
})