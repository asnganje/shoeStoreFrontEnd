import { createSlice } from "@reduxjs/toolkit";


const persons = {
    isLoading: false,
    isLoggedIn: false,
    data: []
}
const userSlice = createSlice({
    name: 'user',
    initialState: persons,
    extraReducers(builder) {
        builder.addCase()
    }
})

export const userReducer = userSlice.reducer;