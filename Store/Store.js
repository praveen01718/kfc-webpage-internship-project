import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cartslice/CartSlice";

export const store =configureStore ({
    reducer:{
        cart:CartSlice
    },
    devTools:true
})