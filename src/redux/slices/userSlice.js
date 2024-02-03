import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../thunks/userThunk";

const persons = {
    isLoading: false,
    isLoggedIn: false,
    data: []
}
const userSlice = createSlice({
    name: 'user',
    initialState: persons,
    extraReducers(builder) {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(createUser.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.data.push(action.payload)
        }),
        builder.addCase(createUser.rejected, (state)=> {
            state.isLoading = false;
            state.isLoggedIn = false;
        })
    }
})

export const userReducer = userSlice.reducer;