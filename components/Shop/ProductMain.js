import React from 'react'
import {StyleSheet, Image, Text} from 'react-native'
import products from '../../shared/images'

function ProductMain(props){

    var indexes = GetAllIndex(products,'drink');
    
    const result = indexes.map(
        (value)=>{
            return(
                <Text>{products[value].id}</Text>
            )
        }
    )

    return result;

    // return(
    //     <>
    //         <Image 
    //             style={styles.product}
    //             source = {products[props.id].image}
    //         />
    //         <Text>{products[props.id].name}</Text>
    //         <Text>{products[props.id].category}</Text>
    //         <Text>{indexes}</Text>
    //         </>
    // )
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