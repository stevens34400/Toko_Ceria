import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';

function Search(){
    const [text, setText] = useState('');

    return(
        <>
            <TextInput
                placeholder="Search..."
                onChangeText={text=>setText(text)}
            />
        </>
    )

}

export default Search;