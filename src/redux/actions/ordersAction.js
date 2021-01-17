import {showSnackbar} from "./snackbarStatusActions";
import {reduxConstants} from "../constants";

const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/orders.json'

const setOrders = (orders) => {
    return {
        type: reduxConstants.SET_ORDERS,
        payload: orders
    }
};

const convertDBObjectToArray = (ordersObj) => {
    let ordersArr = [];
    for (let prop in ordersObj) {
        ordersArr.push(...ordersObj[prop])
    };
    return ordersArr;
}


export const postOrdersToDB = (ordersArr) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ordersArr)
        })
            .then( dispatch(showSnackbar('Order confirmed')) )
            .catch( dispatch(showSnackbar('Something went wrong')) )
    }
}


export const getOrdersFromDB = () => {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(orders => dispatch(setOrders((convertDBObjectToArray(orders)))))
    }
}

