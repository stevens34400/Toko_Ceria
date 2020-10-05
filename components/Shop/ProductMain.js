import React from 'react'
import {StyleSheet, Image} from 'react-native'


function ProductMain(props){
    return(
        <>
            <Image
                style={styles.product} 
                source={props.image}
            />
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