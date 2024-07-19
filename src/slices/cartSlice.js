import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [], // array of items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log(newItem.product.id)
      const existingItem = state.items.find((i) => i.id === newItem.product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem.product, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save to localStorage
   
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save to localStorage
    },
    updateQuantity: (state,action) => {
      const { id, quantity } = action.payload;
      console.log(quantity)
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); 
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save to localStorage
    },

  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
