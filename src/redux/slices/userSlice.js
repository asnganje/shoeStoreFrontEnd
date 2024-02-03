import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "../thunks/userThunk";

const persons = {
    isLoading: false,
    isLoggedIn: false,
    isActive: false,
    data: []
}
const userSlice = createSlice({
    name: 'user',
    initialState: persons,
    extraReducers(builder) {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(createUser.fulfilled, (state)=> {
            state.isLoading = false;
            state.isActive = true;
        }),
        builder.addCase(createUser.rejected, (state)=> {
            state.isLoading = false;
            state.isActive = false;
        }),
        builder.addCase(loginUser.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(loginUser.fulfilled, (state,action)=> {
            state.isLoading = false;
            state.data.push(action.payload)
        }),
        builder.addCase(loginUser.rejected, (state)=> {
            state.isLoading = false
        })
    }
})

export const userReducer = userSlice.reducer;