import {reduxConstants} from "../constants";

const initialState = {
    items: []
};

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case(reduxConstants.SET_PRODUCTS):
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}