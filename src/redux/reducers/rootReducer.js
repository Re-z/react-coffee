import {drawerStatusReducer} from './drawerStatusReducer'
import {combineReducers} from 'redux';

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusReducer
    }
)
