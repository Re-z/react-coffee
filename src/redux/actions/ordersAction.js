import {reduxConstants} from  '../constants';

export const setOrders = (ordersObj) => {
    return {
        type: reduxConstants.SET_ORDERS,
        payload: ordersObj
    }
}