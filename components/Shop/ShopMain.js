import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native'
import Search from '../Home/Search'
import ProductMain from './ProductMain'
import Categories from './Categories'


function ShopMain(){
    //Hook for category of product to show
    const[select, setSelection]=useState('drink');

    return(
        <>
            <Text>Product Main page</Text>
            <Search/>
            <Categories 
                select={select}
                setSelect={setSelection}/>
            <Text>{select}</Text>
            <View style={styles.product}>
                <ProductMain category={select}/>
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

export default ShopMain;