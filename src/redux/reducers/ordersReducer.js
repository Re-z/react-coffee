import {reduxConstants} from '../constants';

const initialState = {
    items: [],
    lastOrderId: null
};

export const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case (reduxConstants.SET_ORDERS):
            return {
                ...state,
                items: action.payload
            }
        case (reduxConstants.SET_LAST_ORDER_ID):
            return {
                ...state,
                lastOrderId: action.payload
            }

        default:
            return state
    }
}