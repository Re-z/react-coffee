import {combineReducers} from 'redux';
import {drawerStatusSlice, drawerStatusSlicePath} from "../slices/drawerStatusSlice";
import {snackbarSlice, snackbarSlicePath} from "../slices/snackbarSlice";
import {baristaActiveProductSlice, baristaActiveProductSlicePath} from "../slices/baristaActiveProductSlice";
import {baristaPreloaderSlice, baristaPreloaderSlicePath} from "../slices/baristaPreloaderSlice";
import {filteredOrdersSlice, filteredOrdersSlicePath} from "../slices/filteredOrdersSlice";
import {ordersPreloaderSlice, ordersPreloaderSlicePath} from "../slices/ordersPreloaderSlice";
import {productsSlice, productsSlicePath} from "../slices/productsSlice";
import {ordersSlice, ordersSlicePath} from "../slices/ordersSlice";

export const rootReducer = combineReducers(
    {
        [drawerStatusSlicePath]: drawerStatusSlice.reducer,
        [baristaActiveProductSlicePath]: baristaActiveProductSlice.reducer,
        [baristaPreloaderSlicePath]: baristaPreloaderSlice.reducer,
        [ordersSlicePath]: ordersSlice.reducer,
        [filteredOrdersSlicePath]: filteredOrdersSlice.reducer,
        [ordersPreloaderSlicePath]: ordersPreloaderSlice.reducer,
        [snackbarSlicePath]: snackbarSlice.reducer,
        [productsSlicePath]: productsSlice.reducer
    }
)
