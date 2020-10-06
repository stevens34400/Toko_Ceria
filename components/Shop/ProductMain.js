import React from 'react'
import {StyleSheet, Image, Text} from 'react-native'
import products from '../../shared/images'

function ProductMain({category}){

    var indexes = GetAllIndex(products,category);
    
    const result = indexes.map(
        (value)=>{
            return(
                <>
                    <Image
                        style={styles.product}
                        source={products[value].image}
                    />
                    <Text>{products[value].name}</Text>
                </>
            )
        }
    )

    return result;
}

function GetAllIndex(array, category){
    var indexes = [];
    var i;
    for (i = 0; i<array.length;i++){
        if(array[i].category==category){
            indexes.push(i);
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
})


export default ProductMain;