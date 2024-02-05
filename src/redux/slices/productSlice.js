import { createSlice } from "@reduxjs/toolkit";
import { createProduct, getAllProducts } from "../thunks/productsThunk";

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
            state.data = action.payload
        }),
        builder.addCase(getAllProducts.rejected, (state)=> {
            state.isLoading = false;
        }),
        builder.addCase(createProduct.pending, (state)=> {
            state.isLoading = true;
          }),
          builder.addCase(createProduct.fulfilled, (state)=> {
            state.isLoading = false;
            // state.data.push(action.payload)
          }),
          builder.addCase(createProduct.rejected, (state)=> {
            state.isLoading = false;
          })
    }
})

export const productsReducer = productSlice.reducer;