import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    msg: ''
}

export const snackbarSlice = createSlice({
    name: 'snackbarSlice',
    initialState: initialState,
    reducers: {
        showSnackbar(state,action) {
            return {
                isOpen: true,
                msg: action.payload
            }
        },
        hideSnackbar(state, action) {
            return {
                isOpen: false,
                msg: action.payload
            }
        }
    }
})