import {reduxConstants} from '../constants';

const initialState = {
    items: []
};

export const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case (reduxConstants.SET_ORDERS):
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }
        default:
            return state
    }
}