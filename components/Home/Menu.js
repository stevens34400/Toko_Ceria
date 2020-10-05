import React, {useState} from 'react'
import {Picker} from '@react-native-community/picker'
import {TextView} from 'react-native'

function Menu(){
    const [select, setSelect]=useState("test");

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