import {drawerStatusReducer} from './drawerStatusReducer'
import {combineReducers} from 'redux';
import {baristaActiveProductReducer} from "./baristaActiveProductReducer";
import {ordersReducer} from "./ordersReducer";
import {snackbarStatusReducer} from "./snackbarReducer";
import {productsReducer} from "./productsReducer";
import {filteredOrdersReducer} from "./filteredOrdersReducer";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusReducer,
        baristaActiveProduct: baristaActiveProductReducer,
        orders: ordersReducer,
        filteredOrders: filteredOrdersReducer,
        snackbarStatus: snackbarStatusReducer,
        products: productsReducer
    }
)
