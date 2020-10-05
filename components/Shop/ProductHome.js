import React from 'react'
import {StyleSheet, Image} from 'react-native'


function ProductHome(props){
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


export default ProductHome;