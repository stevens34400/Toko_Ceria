import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import products from '../../shared/images'

function ProductMain({category}){

    var indexes = GetAllIndex(products,category);

    // console.log(indexes);

    const result = indexes.map(
        (value)=>{
            return(
                <View key={products[value].id}>
                    <Image key={products[value].id+10}
                        style={styles.product}
                        source={products[value].image}
                    />
                    <Text   key={products[value].name}
                            style={styles.product_name}>
                        {products[value].name}
                    </Text>
                </View>
            )   
        }
    )

    // console.log(result);
    return(
        <>
            {result}
        </>
    )

}

function GetAllIndex(products, category){
    var indexes = [];
    var i;
    for (i = 0; i<products.length;i++){
        if(products[i].category==category){
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