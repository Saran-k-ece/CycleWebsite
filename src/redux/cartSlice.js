
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",  //name: Specifies the name of the slice. This is used in action types and is a key part of the state object.
  initialState: { //initialState: Defines the initial state for this slice. Here, it starts with an empty array for items.
    items: []
  },
  reducers: {  //reducers: Contains the reducer functions that handle state changes. Each reducer is a function that takes the current state and an action as arguments, and returns the new state.
    addItems: (state, action) => {  //Parameters: state (the current state) and action (an object containing the payload).
      const item = action.payload; //In the context of Redux, "payload" refers to the data that is sent along with an action to the reducer. 
      // type: Describes the action type (e.g., adding an item to the cart).
      //payload: Contains the data (e.g., item details) needed to perform the action.
      item.offer = item.offer !== undefined ? item.offer : 50;
      state.items.push(item);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addItems, removeFromCart, updateQuantity } = cartSlice.actions;


export const selectCartCount = (state) => state.cart.items.length;

export default cartSlice.reducer;
