import React, {useState, useEffect} from 'react'
import {Picker} from '@react-native-community/picker'
import {Text} from 'react-native' 



function Categories(props){

    //Picker for all the categories of products
    return(
        <>  
            <Picker
                selectedValue={props.select}
                onValueChange={(itemValue)=>props.setSelect(itemValue)}>
                
                <Picker.Item label="drink" value="drink"/>
                <Picker.Item label="gas" value="gas"/>
                <Picker.Item label="drink2" value="drink2"/>
                <Picker.Item label="sanitaries" value="sanitaries"/>
            </Picker>
        </>
    )
}



export default Categories