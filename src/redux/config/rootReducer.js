import {combineReducers} from 'redux';
import {drawerStatusSlice, drawerStatusSlicePath} from "../slices/drawerStatusSlice";
import {snackbarSlice, snackbarSlicePath} from "../slices/snackbarSlice";
import {baristaActiveProductSlice, baristaActiveProductSlicePath} from "../slices/baristaActiveProductSlice";
import {filteredOrdersSlice, filteredOrdersSlicePath} from "../slices/filteredOrdersSlice";
import {productsSlice, productsSlicePath} from "../slices/productsSlice";
import {ordersSlice, ordersSlicePath} from "../slices/ordersSlice";

export const rootReducer = combineReducers(
    {
        [drawerStatusSlicePath]: drawerStatusSlice.reducer,
        [baristaActiveProductSlicePath]: baristaActiveProductSlice.reducer,
        [ordersSlicePath]: ordersSlice.reducer,
        [filteredOrdersSlicePath]: filteredOrdersSlice.reducer,
        [snackbarSlicePath]: snackbarSlice.reducer,
        [productsSlicePath]: productsSlice.reducer
    }
)
