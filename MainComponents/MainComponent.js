import React from 'react';
import Header from './Header';
import Search from './Search';
import Body from './Body';
import Menu from './Menu';


function Main(){

    return(
        <>
            <Header />
            <Header />
            <Menu />
            <Search />
            <Body image={require('./images/milk.jpg')} name='milk'/>
            <Body image={require('./images/water.jpg')} name='water'/>
        </>
    )
}

export default Main;