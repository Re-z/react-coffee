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