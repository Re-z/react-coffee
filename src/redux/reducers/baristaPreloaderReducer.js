import {reduxConstants} from "../constants";

const isPreloaderShown = {
    status: false
};

export const baristaPreloaderReducer = (state=isPreloaderShown, action) => {
    switch (action.type) {
        case(reduxConstants.SHOW_BARISTA_PRELOADER):
            return {
                ...state,
                status: true
            }
        case(reduxConstants.HIDE_BARISTA_PRELOADER):
            return {
                ...state,
                status: false
            }
        default:
            return state;
    }
};