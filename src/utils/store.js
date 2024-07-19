// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import createReducer from '../slices/cartSlice';

const store = configureStore({
  reducer:{
     product: productReducer,
     cart: createReducer,
  }
 
});

export default store;
