import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/shoestore"
const createUser = createAsyncThunk('user/createUser', async (user)=> {
    const url = `${baseUrl}/signup`
    try {
        await axios.post(url, user)
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }
})

const loginUser = createAsyncThunk('user/loginUser', async (user, {rejectWithValue})=> {
    try {
        const url = `${baseUrl}/signup`
        const { email, password } = user;
        const response = await axios.post(url, { email, password });

        if (response.data) {
            return response.data;
        } else {
            throw new Error(`Could not login user`);
        }

    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
})

export {createUser, loginUser}