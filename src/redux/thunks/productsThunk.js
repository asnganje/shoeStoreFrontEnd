import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/shoestore"
const getAllProducts = createAsyncThunk('products/getAllProducts', async (storeId)=> {
    const url = `${baseUrl}/products`
    try {
        const response = await axios.get(url, storeId)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }
})

export {getAllProducts}