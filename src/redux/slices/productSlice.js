import { createSlice } from "@reduxjs/toolkit";
import { createProduct, getAllProducts, removeProduct, updateProduct } from "../thunks/productsThunk";

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
          }),
          builder.addCase(createProduct.rejected, (state)=> {
            state.isLoading = false;
          }),
          builder.addCase(removeProduct.pending, (state)=> {
            state.isLoading = true;
          }),
          builder.addCase(removeProduct.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data = state.data.filter((el)=> el._id !== action.payload)
            return state
        }),
          builder.addCase(removeProduct.rejected, (state)=> {
            state.isLoading = false;
          }),
          builder.addCase(updateProduct.pending, (state)=> {
            state.isLoading = true;
          }),
          builder.addCase(updateProduct.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data = state.data.map((el)=> {
                if (el._id === action.payload._id) {
                   const updatedEl = {...el, name: action.payload.name}
                   return updatedEl
                }
                return el
            })
          }),
          builder.addCase(updateProduct.rejected, (state)=> {
            state.isLoading = false;
          })
    }
})

export const productsReducer = productSlice.reducer;