import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  all: [],
  productDetails: null
}

export const getProducts = createAsyncThunk(
  'products/get',
  async () =>  {
    const data = await axios.get('https://fakestoreapi.com/products')
    return data
  }
)

export const getProductDetailsById = createAsyncThunk(
  'products/id/get',
  async (id) =>  {
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.fulfilled] : (state, action) => {
      state.all = action.payload.data
    },
    [getProducts.rejected] : (state, action) => {
      state.all = []
    },
    [getProductDetailsById.fulfilled] : (state, action) => {
      state.productDetails = action.payload.data
    },
    [getProductDetailsById.rejected] : (state, action) => {
      state.productDetails = null
    }
  }
})

export default productsSlice.reducer