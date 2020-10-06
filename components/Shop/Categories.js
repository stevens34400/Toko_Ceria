import React, {useState, useEffect} from 'react'
import {Picker} from '@react-native-community/picker'
import {Text} from 'react-native' 


const categories = [
    {label: 'drink', value:'drink'},
    {label: 'gas', value: 'gas'}
]

function Categories(props){

    //Picker for all the categories of products
    return(
        <>
            <Picker
                selectedValue={props.select}
                onValueChange={(itemValue)=>{props.setSelect(itemValue)}}
            >
                <Picker.Item label='drink' value='drink'/>
                <Picker.Item label='gas' value='gas'/>
                <Picker.item label='drink2' value='drink2'/>
                <Picker.item label='sanitaries' value='sanitaries'/>
                {/* {console.log(select)} */}
            </Picker>
            
        </>
    )
}



export default Categories