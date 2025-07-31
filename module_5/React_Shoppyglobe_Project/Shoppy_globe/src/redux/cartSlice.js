// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = state => state.cart.cartItems;
export const selectCartTotal = state => state.cart.totalPrice;
export default cartSlice.reducer;
