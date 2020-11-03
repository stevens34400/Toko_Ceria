import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, count:0},
    {id: 2, count: 1},
    {id: 3, count: 1},
    {id: 4, count: 0}
]


export const slice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setAmount: (state,action) => {
            state[0].count += action.payload;
            console.log('id: '+action.payload.id);
            console.log('action '+action.payload);
        },
        
    }
}
);

console.log(slice.actions)
export const {setAmount}= slice.actions;

export const selectCount = (state) => state.cart.id;

export default slice.reducer;