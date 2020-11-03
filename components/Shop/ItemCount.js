import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Text, Button} from 'react-native'
import {setAmount, selectCount} from '../Cart/CartSlice'

function ItemCount(props){
    //Set state
    const [state, setState]=useState(0);

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    
    return(

        <>
            <Text>count: {count}</Text>
            <Text>{state}</Text>
            <Button
                title="Increment"
                onPress={()=>setState(state+1)}
            />
            <Button 
                title="Add to Cart"
                disabled={state<=0}
                onPress={()=>dispatch(setAmount(state))}
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