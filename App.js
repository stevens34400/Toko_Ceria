import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './MainComponents/MainComponent';
import ProductMain from './ProductsComponents/MainComponent';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Products" component={ProductsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Home page
function HomePage({navigation}) {
  return(
    <ScrollView>
      <Button
        title="Go to products page"
        onPress={()=>navigation.navigate('Products')}
      />
      <View style={styles.main}>
        <Main />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

//Products page
function ProductsPage(){
  return(
    <ScrollView>
      <View>
        <ProductMain />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;