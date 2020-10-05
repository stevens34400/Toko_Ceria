import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './MainComponents/MainComponent';
import ProductMain from './ProductsComponents/ProductMain';
import { Button, StyleSheet, View, ScrollView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Products" component={ProductsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Home page
function HomePage({navigation}) {
  return(
    <ScrollView style={styles.android}>
      <Button
        title="Go to products page"
        onPress={()=>navigation.navigate('Products')}
      />
      <View style={styles.home}>
        <Main />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

//Products page
function ProductsPage({navigation}){
  return(
    <ScrollView style={styles.android}>
      <Button
        title="Go to Main page"
        onPress={()=>navigation.navigate('Home')} 
      />
      <View>
        <ProductMain />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}

//FAQ
function FAQ(){
  return(
    <ScrollView>
      <View>

      </View>
    </ScrollView>
  )
}

//CSS for different pages
const styles = StyleSheet.create({
  android: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },

  home: {
    backgroundColor: '#ffff'
  },
});

export default App;