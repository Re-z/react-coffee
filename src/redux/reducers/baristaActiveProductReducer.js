import {baristaActiveProduct} from "../state/baristaActiveProduct";

import {reduxConstants} from '../constants';

export const baristaActiveProductReducer = (state = baristaActiveProduct, action) => {
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