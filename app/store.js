import {configureStore} from '@reduxjs/toolkit';
import cartCounterReducer from '../components/Cart/CartSlice';

export default configureStore({
    reducer: {
        cartCounter: cartCounterReducer
    }
})