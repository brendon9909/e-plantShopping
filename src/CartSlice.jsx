import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items start empty
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++; // Increase quantity if item exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store
export default CartSlice.reducer;
