import {reduxConstants} from "../constants";

export const showOrdersPreloader = () => {
    return {
        type: reduxConstants.SHOW_ORDERS_PRELOADER
    }
};

export const hideOrdersPreloader = () => {
    return {
        type: reduxConstants.HIDE_ORDERS_PRELOADER
    }
};