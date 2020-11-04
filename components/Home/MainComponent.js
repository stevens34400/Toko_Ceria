import React from 'react';
import Header from './Header';
import Search from './Search';
import Body from './Body';
import Menu from './Menu';


function Main(){

    return(
        <>
            <Header />
            <Menu />
            <Search />
            <Body id={0}/>
            <Body id={1}/>
        </>
    )
}

export default Main;