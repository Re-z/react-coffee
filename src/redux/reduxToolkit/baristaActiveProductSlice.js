import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    product: null
}

export const baristaActiveProductSlice = createSlice({
    name: 'baristaActiveProduct',
    initialState,
    reducers: {
        setBaristaActiveProduct(state, action) {
            return {
                product: action.payload
            }
        }
    }
})