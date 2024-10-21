import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice"
export  const store=configureStore({
    // In reducer we register all the slices 
    // Here we write the cartSlice 
    reducer:{
        cart:CartSlice
    }
})