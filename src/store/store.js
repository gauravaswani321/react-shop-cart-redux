import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import apiSlice from "./apiSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:apiSlice,
    }
})

export default store;