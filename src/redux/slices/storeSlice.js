import { createSlice } from "@reduxjs/toolkit";
import { createStore, getStores } from "../thunks/storeThunk";

const naaStore = {
  isLoading: false,
  data: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState: naaStore,
  extraReducers(builder) {
    builder.addCase(getStores.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getStores.fulfilled, (state, action) => {
        state.isLoading = true;
        state.data = [...action.payload];
      }),
      builder.addCase(getStores.rejected, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(createStore.pending, (state)=> {
        state.isLoading = true;
      }),
      builder.addCase(createStore.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.data.push(action.payload)
      }),
      builder.addCase(createStore.rejected, (state)=> {
        state.isLoading = false;
      })
  },
});

export const storeReducer = storeSlice.reducer;
