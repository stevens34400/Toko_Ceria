import React, {useState} from 'react'
import {Text} from 'react-native'

function Cart(props){
    //Number of items in cart
    const [cartItem, setCartItem]=useState(0);

    return(
        <>
            {/* {()=>setCartItem(cartItem+props.cart)} */}
            <Text>{cartItem}</Text>
        </>
    )
}

export default Cart;