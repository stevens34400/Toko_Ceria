import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, count:0},
    {id: 2, count: 0},
    {id: 3, count: 0},
    {id: 4, count: 0}
]


export const slice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setAmount: (state,action)=> {
            const {id, count} = action.payload;
            state[id].count += count;
            // console.log('id:(Cartslice) '+id);
            // console.log('count(Cartslice): '+count)
        }
        
        
        
    }
}
);


export const {setAmount}= slice.actions;

export default slice.reducer;