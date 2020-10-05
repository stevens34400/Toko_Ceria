import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import Search from '../Home/Search'
import ProductMain from './ProductMain'

function ShopMain(){
    var i = 0;
    return(
        <>
        <Text>Product Main page</Text>
        <Search/>
        <View style={styles.product}>
            <ProductMain id={1}/>
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