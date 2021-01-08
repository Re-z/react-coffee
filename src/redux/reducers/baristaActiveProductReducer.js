
import {reduxConstants} from '../constants';

const initialState = {
    product: null
};

export const baristaActiveProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case(reduxConstants.SET_BARISTA_ACTIVE_PRODUCT): {
            return {
                ...state,
                product: action.payload
            }
        }
        default:
            return state
    }
}