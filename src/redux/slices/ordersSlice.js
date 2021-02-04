import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {snackbarSlice} from "./snackbarSlice";

const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/orders.json'

const initialState = {
    items: [],
    isLoading: false,
    lastOrderId: null,
    // filters: {
    //     size: null,
    //     name: null
    // }
}

export const ordersSlicePath = 'orders';

export const ordersSlice = createSlice({
    name: ordersSlicePath,
    initialState,
    reducers: {
        setOrders(state, action) {
            state.items = action.payload
        },
        setLastOrderId(state, action) {
            state.lastOrdersId = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
})


const convertDBObjectToArray = (DBObject) => {
    return Object.values(DBObject).flat(Infinity)
}

const setOrders = ordersSlice.actions.setOrders;
const setIsLoading = ordersSlice.actions.setIsLoading;

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
        dispatch(setIsLoading(true))
        //emulate data loading
        setTimeout(() => {
            axios.get(url)
                .then(orders =>
                    dispatch(setOrders((convertDBObjectToArray(orders.data))))
                )
                .then(dispatch(setIsLoading(false)))
        }, 1000)
    }
}
