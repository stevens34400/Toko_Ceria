import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import cartReducer from '../components/Cart/CartSlice'

export default configureStore({
    reducer: {
        cart: cartReducer
    }
    
})