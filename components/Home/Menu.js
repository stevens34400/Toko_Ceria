import React, {useState, useEffect} from 'react'
import {Picker} from '@react-native-community/picker'

function Menu(){
    const [select, setSelect]=useState("test");

    // useEffect(()=>{
    //     console.log(select)
    // })

    return(
        <>
            <Picker
                selectedValue={select}
                onValueChange={(itemValue,itemIndex)=>setSelect(itemValue)}
            >
                <Picker.Item label="test1" value="test1"/>
                <Picker.Item label="test2" value="test2" />
            </Picker>
        </>
    );
}

export default Menu;