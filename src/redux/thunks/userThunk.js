import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/vtc"
const createUser = createAsyncThunk('user/createUser', async (user)=> {
    try {
        await axios.post(baseUrl, user)
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }
})

export {createUser}