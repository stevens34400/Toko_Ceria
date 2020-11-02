import React, {useState} from 'react'
import {Text, Button} from 'react-native'

function ItemCount(props){
    //Set state
    const [state, setState]=useState(0);
    
    return(

        <>
            <Text>{state}</Text>
            <Button
                title="Increment"
                onPress={()=>setState(state+1)}
            />
            <Button 
                title="Add to Cart"
                disabled={state<=0}
                onPress={()=>props.setCart(props.cart+state)}
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