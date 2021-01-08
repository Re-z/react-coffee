import {reduxConstants} from "../constants";

export const setBaristaActiveProduct = (productObj) => {
    return {
        type: reduxConstants.SET_BARISTA_ACTIVE_PRODUCT,
        payload: productObj
    }
}
