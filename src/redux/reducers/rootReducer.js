import {drawerStatusReducer} from './drawerStatusReducer'
import {combineReducers} from 'redux';
import {baristaActiveProductReducer} from "./baristaActiveProductReducer";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusReducer,
        baristaActiveProduct: baristaActiveProductReducer
    }
)
