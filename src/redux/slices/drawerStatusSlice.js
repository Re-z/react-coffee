const {createSlice} = require("@reduxjs/toolkit");

export const drawerStatusSlicePath = 'drawerStatus'

export const drawerStatusSlice = createSlice({
    name: drawerStatusSlicePath,
    initialState: false,
    reducers: {
        showDrawer(state) {
            return state = true
        },
        hideDrawer(state) {
            return state = false
        }
    }
})
