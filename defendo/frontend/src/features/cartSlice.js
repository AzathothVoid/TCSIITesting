import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { Name, price, img, id, quantity, size, color } = action.payload;
      const existingProductIndex = state.findIndex((item) => item.id === id);

      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += quantity;
      } else {
        state.push({ Name, price, img, id, quantity, size, color });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.findIndex(item => item.id === itemId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
    toggleCart: (state, action) => {
      state.isOpen = action.payload;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
