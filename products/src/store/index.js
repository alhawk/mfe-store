import {configureStore} from '@reduxjs/toolkit'
import productsReducer from './slices/products'

const reducer = {
  products: productsReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true
})

export default store