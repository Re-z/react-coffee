import {drawerStatusReducer} from './drawerStatusReducer'
import {combineReducers} from 'redux';
import {baristaActiveProductReducer} from "./baristaActiveProductReducer";
import {ordersReducer} from "./ordersReducer";
import {snackbarStatusReducer} from "./snackbarReducer";
import {productsReducer} from "./productsReducer";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusReducer,
        baristaActiveProduct: baristaActiveProductReducer,
        orders: ordersReducer,
        snackbarStatus: snackbarStatusReducer,
        products: productsReducer
    }
)
