import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, ScrollView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';

import Main from './components/Home/MainComponent';
import ShopMain from './components/Shop/ShopMain';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({focused, color, size})=>{
            let iconName;

            if(route.name==='Home'){
              iconName="home";
            }
            else if(route.name==='Shop'){
              iconName="shoppingcart"
            }

            return <AntDesign name={iconName} size={size} color={color}/>;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
          
      >
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