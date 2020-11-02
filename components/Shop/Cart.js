import React, {useState} from 'react'
import {Text} from 'react-native'

function Cart(props){
    //Number of items in cart
    const [cartItem, setCartItem]=useState(0);

    return(
        <>
            {/* <Text>Number of Items in Cart: {props.cart}</Text> */}
        </>
    )
}

export default Cart;