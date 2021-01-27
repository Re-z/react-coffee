import {showSnackbar} from "./snackbarStatusActions";
import {reduxConstants} from "../constants";
import axios from "axios";
import {hideOrdersPreloader, showOrdersPreloader} from "./ordersPreloaderAction";
import {snackbarSlice} from "../reduxToolkit/snackbarSlice";

const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/orders.json'

const setOrders = (orders) => {
    return {
        type: reduxConstants.SET_ORDERS,
        payload: orders
    }
};

export const setLasOrderId = (id) => {
    return {
        type: reduxConstants.SET_LAST_ORDER_ID,
        payload: {lastOrderId: id}
    }
}

const convertDBObjectToArray = (DBObject) => {
    return Object.values(DBObject).flat(Infinity)
}

export const postOrdersToDB = (ordersArr) => {
    return (dispatch) => {
        const postOrders = axios.post(url, ordersArr)
            .then(() => dispatch( snackbarSlice.actions.showSnackbar('Order confirmed')) )
            .catch(() => dispatch( snackbarSlice.actions.showSnackbar('Something went wrong')) )
        return postOrders;
    }
}

export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(showOrdersPreloader())
        //emulate data loading
        setTimeout(() => {
                axios.get(url)
                    .then(orders =>
                        dispatch(setOrders((convertDBObjectToArray(orders.data))))
                    )
                    .then(dispatch(hideOrdersPreloader()))
            }, 1000)
        }
}


