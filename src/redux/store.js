// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({ // called to create React Store
  reducer: {
    cart: cartReducer
    /*
    Here, cart is the key, and cartReducer is the value. This means that the state managed
    by cartReducer will be available under the cart key in the Redux store's state.
 
    */
  }
});

export default store;
