import React from 'react'
import {StyleSheet, Image, Text} from 'react-native'
import products from '../../shared/images'

function ProductMain(props){
    return(
        <>
            <Image 
                style={styles.product}
                source = {products[props.id].image}
            />
            <Text>{products[props.id].name}</Text>
            <Text>{products.length}</Text>
            </>
    )
}

const styles = StyleSheet.create({
    product: {
        borderLeftWidth: 50,
        resizeMode: "contain",
        height: 300,
        width: 300,
    },
})


export default ProductMain;