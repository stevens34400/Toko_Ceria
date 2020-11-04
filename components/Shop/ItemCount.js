import React, {useState} from 'react'
import {createAction} from '@reduxjs/toolkit'
import {useSelector, useDispatch} from 'react-redux'
import {Text, Button} from 'react-native'
import {setAmount, selectCount} from '../Cart/CartSlice'

function ItemCount(props){
    //Set state
    const [state, setState]=useState(0);

    const dispatch = useDispatch();

    return(

        <>
            <Text>ID: {props.item}</Text>
            <Text>{state}</Text>
            <Button
                title="Increment"
                onPress={()=>setState(state+1)}
            />
            <Button 
                title="Add to Cart"
                disabled={state<=0}
                onPress={()=>dispatch(setAmount({id: props.item,count: state}))}
            />
            <Button 
                title="Decrement"
                onPress={()=>setState(state-1)}
                disabled={state<=0}
            />
        </>
    )
}

export default ItemCount;