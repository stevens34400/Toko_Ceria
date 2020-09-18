import React from 'react';
import {Text, Image} from 'react-native';
import Header from './Header';
import Search from './Search';
import Body from './Body';


function Main(){

    return(
        <>
            <Text>Main</Text>
            <Header />
            <Header />
            <Search />
            <Body image='./images/milk.jpg' name='milk'/>
            {/* <Image source={require('./images/milk.jpg')} /> */}
        </>
    )
}

export default Main;