import {createSlice} from "@reduxjs/toolkit";
import {baristaPreloaderSlice} from "./baristaPreloaderSlice";
import axios from "axios";

const initialState = {
    items: []
}
export const productsSlicePath = 'products';

export const productsSlice = createSlice({
    name: productsSlicePath,
    initialState,
    reducers: {
        setProducts(state, action) {
            state.items = action.payload
        }
    }
})

const setProducts = productsSlice.actions.setProducts;

export const fetchProducts = () => {
    return (dispatch) => {
        const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/products.json';
        dispatch(baristaPreloaderSlice.actions.showBaristaPreloader())
        // data resolving emulation
        setTimeout(() => {
            axios.get(url)
                .then( response =>  Object.values(response.data))
                .then(products => { dispatch(setProducts(products))})
                .then(dispatch(baristaPreloaderSlice.actions.hideBaristaPreloader()));
        }, 1000)
    }
}

