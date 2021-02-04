import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    msg: ''
}

export const snackbarSlicePath = 'snackbarSlice'

export const snackbarSlice = createSlice({
    name: snackbarSlicePath,
    initialState: initialState,
    reducers: {
        showSnackbar(state,action) {
            state.isOpen = true;
            state.msg = action.payload;
        },
        hideSnackbar(state, action) {
            state.isOpen = false;
            state.msg = action.payload;
        }
    }
})