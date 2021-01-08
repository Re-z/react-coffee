
import {reduxConstants} from '../constants';

const initialState = {
    isOpen: false,
    msg: ''
}

export const snackbarStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case(reduxConstants.SHOW_SNACKBAR): {
            return {
                ...state,
                isOpen: true,
                msg: action.payload

            }
        }
        case(reduxConstants.HIDE_SNACKBAR): {
            return {
                ...state,
                isOpen: false,
                msg: action.payload
            }
        }
        default:
            return state
    }
}