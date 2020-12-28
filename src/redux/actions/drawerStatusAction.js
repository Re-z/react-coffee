import {reduxConstants} from "../constants";

export const showDrawer = () => {
    return {
        type: reduxConstants.SHOW_DRAWER
    }
}
export const hideDrawer = () => {
    return {
        type: reduxConstants.HIDE_DRAWER
    }
}
