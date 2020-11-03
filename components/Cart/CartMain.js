import React, {useState} from 'react'
import {useSelector, useDispatcher} from 'react-redux'
import {Text} from 'react-native'
import {selectCount} from './CartSlice'

function CartMain(props){
    //Number of items in cart
    const cartCount = useSelector(selectCount);

    return(
        <>
            <Text>Cart Count: {cartCount}</Text>
        </>
    )
}

export default CartMain;