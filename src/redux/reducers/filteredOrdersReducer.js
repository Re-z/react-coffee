import {reduxConstants} from "../constants";

const initialState = {
    items: []
}
export const filteredOrdersReducer = (state = initialState, action) => {
    switch(action.type) {
        case(reduxConstants.SET_FILTERED_ORDERS):
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}