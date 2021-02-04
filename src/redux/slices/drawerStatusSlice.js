const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    isOpen: false
}

export const drawerStatusSlicePath = 'drawerStatus'

export const drawerStatusSlice = createSlice({
    name: drawerStatusSlicePath,
    initialState,
    reducers: {
        showDrawer(state) {
            state.isOpen = true;
        },
        hideDrawer(state) {
            state.isOpen = false;
        }
    }
})
