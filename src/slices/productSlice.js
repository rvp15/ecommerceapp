import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    sortBy: 'featured',
  };
   
  const productSlice =createSlice({
    name:'product',
    initialState,
    reducers:{
        allProducts:(state,action) => {
            state.products =action.payload;
            state.filteredProducts = [...action.payload];
        },
        filteredProducts: (state, action) => {
            state.filteredProducts = state.products.filter(product =>
              product.category === action.payload
            );
          },
       sortProducts:( state, action) =>{
        const {sortBy} = action.payload;
        let sortedProducts = [...state.filteredProducts];

        if (sortBy === 'priceLowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
          } else if (sortBy === 'priceHighToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
          } else if (sortBy === 'customerReview') {
            sortedProducts.sort((a, b) => b.rating - a.rating);
          } else if (sortBy === 'newestArrival') {
            sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
          } else if (sortBy === 'bestSellers') {
            // Assuming we have a sales property
            sortedProducts.sort((a, b) => b.sales - a.sales);
          }
          state.filteredProducts = sortedProducts;
          state.sortBy = sortBy;
       }
    }
  });


export const { allProducts, filteredProducts, sortProducts} = productSlice.actions;
export default productSlice.reducer;