import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import cartReducer from '../components/Cart/CartSlice'
import {Constants} from 'expo'
import {composeWithDevTools} from 'remote-redux-devtools'

export default configureStore({
    reducer: {
        cart: cartReducer
    }
    
})