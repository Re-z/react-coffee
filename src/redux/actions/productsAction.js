import {reduxConstants} from "../constants";
import axios from "axios";

const setProducts = (payload) => {
    return {
        type: reduxConstants.SET_PRODUCTS,
        payload: payload
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/products.json';
        axios.get(url)
            .then( response =>  Object.values(response.data))
            .then(products => { dispatch(setProducts(products))});
    };
}


