import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import products from '../../shared/images'

function ProductMain({category}){

    var indexes = GetAllIndex(products,category);
    

    const result = indexes.map(
        (value)=>{
            return(
                <>
                <View key={products[value].id}>
                    <Image
                        style={styles.product}
                        source={products[value].image}
                    />
                    <Text style={styles.product_name}>
                        {products[value].name}
                    </Text>
                </View>
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

    product_name: {
        textAlign: 'center'
    }
})


export default ProductMain;