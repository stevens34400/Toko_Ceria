import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import Search from '../Home/Search'
import ProductMain from './ProductMain'

function ShopMain(){
    return(
        <>
        <Text>Product Main page</Text>
        <Search/>
        <View style={styles.product}>
            <ProductMain image={require('../Home/images/milk.jpg')}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    product: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ShopMain;