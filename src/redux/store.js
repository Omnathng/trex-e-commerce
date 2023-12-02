import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore ({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }

})
export default store