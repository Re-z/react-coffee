import {reduxConstants} from "../constants";

const setProducts = (payload) => {
    return {
        type: reduxConstants.SET_PRODUCTS,
        payload: payload
    }
}


export const fetchProducts = () => {
    return (dispatch) => {
        const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/products.json';
        fetch(url)
            .then(response => response.json())
            .then(data => Object.values(data))
            .then(products => dispatch(setProducts( products )));
    };
}


