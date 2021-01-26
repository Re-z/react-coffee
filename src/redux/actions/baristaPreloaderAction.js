import {reduxConstants} from "../constants";

export const showBaristaPreloader = () => {
    return {
        type: reduxConstants.SHOW_BARISTA_PRELOADER
    }
}

export const hideBaristaPreloader = () => {
    return {
        type: reduxConstants.HIDE_BARISTA_PRELOADER
    }
}