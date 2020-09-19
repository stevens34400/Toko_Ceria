import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';


function Body(props){
    var test = props.image;

    return(
        <>
            <Image 
                style={styles.stockimage}
                source = {props.image}
            />
            <Text>{props.name}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    stockimage: {
        resizeMode: "contain",
        height: 600,
        width: 600,
    },
});

export default Body;