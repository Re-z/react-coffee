import {reduxConstants} from "../constants";

export const showSnackbar = (msgString) => {
    return {
        type: reduxConstants.SHOW_SNACKBAR,
        payload: msgString
    }
}
export const hideSnackbar = (msgString) => {
    return {
        type: reduxConstants.HIDE_SNACKBAR,
        payload: msgString
    }
}
