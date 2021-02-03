import {combineReducers} from 'redux';
import {drawerStatusSlice} from "../slices/drawerStatusSlice";
import {snackbarSlice} from "../slices/snackbarSlice";
import {baristaActiveProductSlice} from "../slices/baristaActiveProductSlice";
import {baristaPreloaderSlice} from "../slices/baristaPreloaderSlice";
import {filteredOrdersSlice} from "../slices/filteredOrdersSlice";
import {ordersPreloaderSlice} from "../slices/ordersPreloaderSlice";
import {productsSlice} from "../slices/productsSlice";
import {ordersSlice} from "../slices/ordersSlice";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusSlice.reducer,
        baristaActiveProduct: baristaActiveProductSlice.reducer,
        baristaPreloader: baristaPreloaderSlice.reducer,
        orders: ordersSlice.reducer,
        filteredOrders: filteredOrdersSlice.reducer,
        ordersPreloader: ordersPreloaderSlice.reducer,
        snackbarStatus: snackbarSlice.reducer,
        products: productsSlice.reducer
    }
)
