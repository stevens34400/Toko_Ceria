import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import products from '../../shared/images'


function Body(props){
    var test = props.image;

    return(
        <>
            <Image 
                style={styles.stockimage}
                source = {products[props.id].image}
            />
            <Text>{products[props.id].name}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    stockimage: {
        resizeMode: "contain",
        height: 300,
        width: 300,
    },
});

export default Body;