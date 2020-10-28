import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native'
import Search from '../Home/Search'
import ProductMain from './ProductMain'
import Categories from './Categories'
import Cart from './Cart'


function ShopMain(){
    //Hook for category of product to show
    const[select, setSelection]=useState('drink');

    //Hook for number of items in Cart
    const[cart, setCart]=useState(0);

    return(
        <>
            <Text>Product Main page</Text>
            <Cart 
                cart={cart}
            />
            <Search/>
            <Categories 
                select={select}
                setSelect={setSelection}/>
            <View style={styles.product}>
                <ProductMain 
                    category={select}
                    setCart={setCart}
                />
            </View>
            {console.log(cart)}
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