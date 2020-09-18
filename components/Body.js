import React from 'react';
import {Text, Images} from 'react-native';

function Body(props){
    return(
        <>
            <Text>{props.image}</Text>
            {/* <Images source={require(this.props.image)} /> */}
        </>
    )
}

export default Body;