import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../thunks/productsThunk";

const ourProducts = {
    isLoading: false,
    data: []
}

const productSlice = createSlice({
    name: 'products',
    initialState: ourProducts,
    extraReducers(builder) {
        builder.addCase(getAllProducts.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(getAllProducts.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data = [...action.payload]
        }),
        builder.addCase(getAllProducts.rejected, (state)=> {
            state.isLoading = false;
        })
    }
})

export const productsReducer = productSlice.reducer;