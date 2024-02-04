import { createSlice } from "@reduxjs/toolkit";
import { getStores } from "../thunks/storeThunk";

const naaStore = {
    isLoading: false,
    data: []
}

const storeSlice = createSlice({
    name: 'store',
    initialState: naaStore,
    extraReducers(builder) {
        builder.addCase(getStores.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(getStores.fulfilled, (state, action)=> {
            state.isLoading = true;
            state.data = [...action.payload]
        }),
        builder.addCase(getStores.rejected, (state)=> {
            state.isLoading = true;
        })
    }
})

export const storeReducer = storeSlice.reducer;