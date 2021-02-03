import {createSlice} from "@reduxjs/toolkit";
import {ordersPreloaderSlice} from "./ordersPreloaderSlice";
import axios from "axios";
import {snackbarSlice} from "./snackbarSlice";

const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/orders.json'

const initialState = {
    items: [],
    lastOrderId: null,
    // filters: {
    //     size: null,
    //     name: null
    // }
}

// dispatch(setOrdersFilter({size: 'M'}))

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders(state, action) {
            state.items = action.payload
        },
        setLastOrderId(state, action) {
            state.lastOrdersId = action.payload
        },
        // setOrdersFilters() {}
    }
})




const convertDBObjectToArray = (DBObject) => {
    return Object.values(DBObject).flat(Infinity)
}

const setOrders = ordersSlice.actions.setOrders;

export const postOrdersToDBThunk = (ordersArr) => {
    return (dispatch) => {
        const postOrders = axios.post(url, ordersArr)
            .then(() => dispatch( snackbarSlice.actions.showSnackbar('Order confirmed')) )
            .catch(() => dispatch( snackbarSlice.actions.showSnackbar('Something went wrong')) )
        return postOrders;
    }
}

export const fetchOrdersThunk = () => {
    return (dispatch) => {
        dispatch(ordersPreloaderSlice.actions.showOrdersPreloader())
        //emulate data loading
        setTimeout(() => {
            axios.get(url)
                .then(orders =>
                    dispatch(setOrders((convertDBObjectToArray(orders.data))))
                )
                .then(dispatch(ordersPreloaderSlice.actions.hideOrdersPreloader()))
        }, 1000)
    }
}
