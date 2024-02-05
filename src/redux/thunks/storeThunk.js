import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/shoestore"

const createStore = createAsyncThunk('store/createStore', async(store)=> {
    const url = `${baseUrl}/store`
    try {
        const response = await axios.post(url, store)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)        
    }
})

const getStores = createAsyncThunk('store/getStores', async()=> {
    const url = `${baseUrl}/store`
    try {
        const response = await axios.get(url)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }
}) 

export {getStores, createStore}