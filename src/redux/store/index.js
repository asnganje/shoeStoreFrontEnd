import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userSlice";
import { storeReducer } from "../slices/storeSlice";
import { productsReducer } from "../slices/productSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        store: storeReducer,
        products: productsReducer
    }
})

export {store}
export * from '../slices/userSlice'
export * from '../slices/storeSlice'