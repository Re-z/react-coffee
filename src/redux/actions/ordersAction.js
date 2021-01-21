import {showSnackbar} from "./snackbarStatusActions";
import {reduxConstants} from "../constants";

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

        const postOrders = fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ordersArr)
        })
            .then(() => dispatch( showSnackbar('Order confirmed')) )
            .catch(() => dispatch( showSnackbar('Something went wrong')) )
        return postOrders;
    }
}


export const getOrdersFromDB = () => {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(orders => dispatch(setOrders((convertDBObjectToArray(orders)))))
    }
}


