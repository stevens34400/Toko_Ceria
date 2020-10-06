import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, ScrollView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './components/Home/MainComponent';
import ShopMain from './components/Shop/ShopMain';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Shop" component={ShopPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Home page
function HomePage({navigation}) {
  return(
    <ScrollView style={styles.android}>
      <View style={styles.home}>
        <Main />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

//Shop page
function ShopPage({navigation}){
  return(
    <ScrollView style={styles.android}>
      <View>
        <ShopMain />
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
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },

  home: {
    backgroundColor: '#ffff'
  },
});

export default App;