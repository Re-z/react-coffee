import {createSlice} from "@reduxjs/toolkit";

const initialState = false

export const baristaPreloaderSlice = createSlice({
    name: 'baristaPreloader',
    initialState,
    reducers: {
        showBaristaPreloader(state) {
            return state = true
        },
        hideBaristaPreloader(state) {
            return state = false
        }
    }
})