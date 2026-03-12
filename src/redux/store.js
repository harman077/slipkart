import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartslice'
import productReducer from './productslice'
import authReducer from './authSlice'


export const store=configureStore({
    reducer:{
        cart :cartReducer,
        products:productReducer,
        auth:authReducer
}
})