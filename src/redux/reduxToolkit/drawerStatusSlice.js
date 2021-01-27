const {createSlice} = require("@reduxjs/toolkit");

export const drawerStatusSlice = createSlice({
    name: 'DrawerStatus',
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
