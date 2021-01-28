import {drawerStatusReducer} from './reducers/drawerStatusReducer'
import {combineReducers} from 'redux';
import {baristaActiveProductReducer} from "./reducers/baristaActiveProductReducer";
import {ordersReducer} from "./reducers/ordersReducer";
import {snackbarStatusReducer} from "./reducers/snackbarReducer";
import {productsReducer} from "./reducers/productsReducer";
import {filteredOrdersReducer} from "./reducers/filteredOrdersReducer";
import {ordersPreloaderReducer} from "./reducers/ordersPreloaderReducer";
import {baristaPreloaderReducer} from "./reducers/baristaPreloaderReducer";
import {drawerStatusSlice} from "./reduxToolkit/drawerStatusSlice";
import {snackbarSlice} from "./reduxToolkit/snackbarSlice";
import {baristaActiveProductSlice} from "./reduxToolkit/baristaActiveProductSlice";
import {baristaPreloaderSlice} from "./reduxToolkit/baristaPreloaderSlice";
import {filteredOrdersSlice} from "./reduxToolkit/filteredOrdersSlice";
import {ordersPreloaderSlice} from "./reduxToolkit/ordersPreloaderSlice";
import {productsSlice} from "./reduxToolkit/productsSlice";

export const rootReducer = combineReducers(
    {
        drawerStatus: drawerStatusSlice.reducer,
        // baristaActiveProduct: baristaActiveProductReducer,
        baristaActiveProduct: baristaActiveProductSlice.reducer,
        // baristaPreloader: baristaPreloaderReducer,
        baristaPreloader: baristaPreloaderSlice.reducer,
        orders: ordersReducer,
        // filteredOrders: filteredOrdersReducer,
        filteredOrders: filteredOrdersSlice.reducer,
        // ordersPreloader: ordersPreloaderReducer,
        ordersPreloader: ordersPreloaderSlice.reducer,
        // snackbarStatus: snackbarStatusReducer,
        snackbarStatus: snackbarSlice.reducer,
        // products: productsReducer
        products: productsSlice.reducer
    }
)
