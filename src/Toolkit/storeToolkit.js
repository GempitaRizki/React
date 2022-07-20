import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { composeWithDevTools } from 'redux-devtools-extension'

export default configureStore({
    reducer : {
        cartStore : cartSlice
    }
},
composeWithDevTools()
)