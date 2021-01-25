import {reduxConstants} from "../constants";

export const setFilteredOrders = (payload) => {
    return {
        type: reduxConstants.SET_FILTERED_ORDERS,
        payload: payload
    }
};
