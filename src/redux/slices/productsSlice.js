import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    isLoading: false
}
export const productsSlicePath = 'products';

export const productsSlice = createSlice({
    name: productsSlicePath,
    initialState,
    reducers: {
        setProducts(state, action) {
            state.items = action.payload;
        },
        setIsLoading(state, action) {
          state.isLoading = action.payload;
        }
    }
})

const setProducts = productsSlice.actions.setProducts;
const setIsLoading = productsSlice.actions.setIsLoading;

export const fetchProducts = () => {
    return (dispatch) => {
        const url = 'https://react-coffee-629c8-default-rtdb.firebaseio.com/products.json';
        dispatch(setIsLoading(true))
        // data resolving emulation
        setTimeout(() => {
            axios.get(url)
                .then( response =>  Object.values(response.data))
                .then(products => { dispatch(setProducts(products))})
                .then(
                    dispatch(setIsLoading(false))
                );
        }, 1000)
    }
}

