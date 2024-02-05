import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/shoestore"

const createProduct = createAsyncThunk('products/createProduct', async(product)=> {
    const url = `${baseUrl}/products`
    try {
        const response = await axios.post(url, product)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`) 
    }
})


const getAllProducts = createAsyncThunk('products/getAllProducts', async (store)=> {
    const url = `${baseUrl}/products?store=${store.store}`
    try {
        const response = await axios.get(url)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }
})

export {getAllProducts, createProduct}