import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import CartItem from './CartItem'

function CartMain(props){

    return(
        <>
            <View style={styles.product}>
                <CartItem/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    product: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30
    }
})

export default CartMain;