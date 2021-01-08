import {drawerStatusReducer} from './drawerStatusReducer'
import {combineReducers} from 'redux';
import {baristaActiveProductReducer} from "./baristaActiveProductReducer";
import {ordersReducer} from "./ordersReducer";
import {snackbarStatusReducer} from "./snackbarReducer";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusReducer,
        baristaActiveProduct: baristaActiveProductReducer,
        orders: ordersReducer,
        snackbarStatus: snackbarStatusReducer
    }
)
