import {reduxConstants} from "../constants";
import axios from "axios";
import {hideBaristaPreloader, showBaristaPreloader} from "./baristaPreloaderAction";
import {hideOrdersPreloader} from "./ordersPreloaderAction";
import {baristaPreloaderSlice} from "../reduxToolkit/baristaPreloaderSlice";

const setProducts = (payload) => {
    return {
        type: reduxConstants.SET_PRODUCTS,
        payload: payload
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/products.json';
        dispatch(baristaPreloaderSlice.actions.showBaristaPreloader())
        setTimeout(() => {
            axios.get(url)
                .then( response =>  Object.values(response.data))
                .then(products => { dispatch(setProducts(products))})
                .then(dispatch(baristaPreloaderSlice.actions.hideBaristaPreloader()));
        }, 1000)

    };
}


