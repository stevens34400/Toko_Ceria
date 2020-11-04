import React from 'react'
import { useSelector, useDispatcher} from 'react-redux'
import {Text, View, Image, StyleSheet} from 'react-native'

import products from '../../shared/images'

function CartItem(props){
    //Number of items in cart
    const cartItems = useSelector(state => state.cart);

    var renderCart = getItems(cartItems);

    const finalCart = renderCart.map(
        (value)=>{
            return(
                <View>
                    <Image
                        style={styles.product}
                        source={products[value.id-1].image} 
                    />
                    <Text>ID: {products[value.id-1].name}</Text>
                    <Text>Count: {value.count}</Text>
                </View>
            )
        }
    )

    return finalCart;
}

function getItems(cart){
    var indexes = [];
    var i;
    for(i=0;i<cart.length;i++){
        if(cart[i].count>0){
            indexes.push(cart[i]);
        }
    }

    return indexes;
}

const styles = StyleSheet.create({
    product: {
        borderLeftWidth: 50,
        resizeMode: "contain",
        height: 300,
        width: 300,
    },

    product_name: {
        textAlign: 'center'
    }
})

export default CartItem;