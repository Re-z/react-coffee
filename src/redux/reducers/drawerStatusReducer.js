import {drawerStatus} from "../state/drawerStatus";

import {reduxConstants} from '../constants';

export const drawerStatusReducer = (state = drawerStatus, action) => {
    switch (action.type) {
        case(reduxConstants.SHOW_DRAWER): {
            return {
                ...state,
                isOpen: true
            }
        }
        case(reduxConstants.HIDE_DRAWER): {
            return {
                ...state,
                isOpen: false
            }
        }
        default:
            return state
    }
}