
import {reduxConstants} from '../constants';

const initialState = {
    isOpen: false
}

export const drawerStatusReducer = (state = initialState, action) => {
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