import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://shoestorebackend.onrender.com/api/v1/shoestore" || "http://localhost:3000/api/v1/shoestore"

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

const updateProduct = createAsyncThunk('products/updateProduct', async(product)=> {

    const {id, ...rest} = product
    const url = `${baseUrl}/products?productId=${id}`
    try {
        const response = await axios.patch(url, rest)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`) 
    }
})

const removeProduct = createAsyncThunk('products/removeProduct', async(productId)=> {
    const url = `${baseUrl}/products?productId=${productId}`
    try {
        await axios.delete(url)
        return productId
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`) 
    }
})


export {getAllProducts, createProduct, updateProduct, removeProduct}