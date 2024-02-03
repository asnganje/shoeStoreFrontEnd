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
            state.data.push(action.payload)
        }),
        builder.addCase(createUser.rejected, (state)=> {
            state.isLoading = false;
        })
    }
})

export const userReducer = userSlice.reducer;