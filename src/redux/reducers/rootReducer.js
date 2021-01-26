import {drawerStatusReducer} from './drawerStatusReducer'
import {combineReducers} from 'redux';
import {baristaActiveProductReducer} from "./baristaActiveProductReducer";
import {ordersReducer} from "./ordersReducer";
import {snackbarStatusReducer} from "./snackbarReducer";
import {productsReducer} from "./productsReducer";
import {filteredOrdersReducer} from "./filteredOrdersReducer";
import {ordersPreloaderReducer} from "./ordersPreloaderReducer";
import {baristaPreloaderReducer} from "./baristaPreloaderReducer";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusReducer,
        baristaActiveProduct: baristaActiveProductReducer,
        baristaPreloader: baristaPreloaderReducer,
        orders: ordersReducer,
        filteredOrders: filteredOrdersReducer,
        ordersPreloader: ordersPreloaderReducer,
        snackbarStatus: snackbarStatusReducer,
        products: productsReducer
    }
)
