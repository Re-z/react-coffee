import {combineReducers} from 'redux';
import {drawerStatusSlice} from "./reduxToolkit/drawerStatusSlice";
import {snackbarSlice} from "./reduxToolkit/snackbarSlice";
import {baristaActiveProductSlice} from "./reduxToolkit/baristaActiveProductSlice";
import {baristaPreloaderSlice} from "./reduxToolkit/baristaPreloaderSlice";
import {filteredOrdersSlice} from "./reduxToolkit/filteredOrdersSlice";
import {ordersPreloaderSlice} from "./reduxToolkit/ordersPreloaderSlice";
import {productsSlice} from "./reduxToolkit/productsSlice";
import {ordersSlice} from "./reduxToolkit/ordersSlice";

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
