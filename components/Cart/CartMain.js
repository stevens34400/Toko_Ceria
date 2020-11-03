import React, {useState} from 'react'
import {useSelector, useDispatcher} from 'react-redux'
import {Text} from 'react-native'
import CartItem from './CartItem'

function CartMain(props){

    return(
        <>
            <CartItem/>
        </>
    )
}

export default CartMain;