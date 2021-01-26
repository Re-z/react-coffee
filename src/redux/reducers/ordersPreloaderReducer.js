import {reduxConstants} from "../constants";

const isPreloaderShown = {
    status: false
};

export const ordersPreloaderReducer = (state = isPreloaderShown, action) => {
    switch (action.type) {
        case(reduxConstants.SHOW_ORDERS_PRELOADER):
            return {
                ...state,
                status: true
            }
        case(reduxConstants.HIDE_ORDERS_PRELOADER):
            return {
                ...state,
                status: false
            }
        default:
            return state
    }
}