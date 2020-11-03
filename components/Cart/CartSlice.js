import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name:'cartCounter',
    initialState: {
        value:0,
    },

    reducers:{
        setAmount: (state,action) => {
            state.value += action.payload;
        }
    }
}
);

export const {setAmount}= slice.actions;

export const selectCount = (state) => state.cartCounter.value;

export default slice.reducer;