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

export {createUser}