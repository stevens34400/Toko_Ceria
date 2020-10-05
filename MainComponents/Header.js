import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Header(){
    return(
        <Text style={styles.Header} >Toko Ceria</Text>
    )
}

const styles = StyleSheet.create({
    Header: {
      color: '#0005',
      textAlign: 'center',
      textTransform: 'capitalize',
      fontSize: 50,
    },
  });

export default Header;