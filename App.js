import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import store from './app/store';
import { Button, StyleSheet, View, ScrollView, Platform, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';

import Main from './components/Home/MainComponent';
import ShopMain from './components/Shop/ShopMain';
import CartMain from './components/Cart/CartMain';


const Tab = createBottomTabNavigator();

// const [test, setTest]=useState(0);

function App() {
  return (
    <Provider store={store}>
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
        <Tab.Screen name="Cart" component={CartPage} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
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
  //Hook for cart items
  const[cart, setCart]=useState(0);

  return(
    <ScrollView style={styles.android}>
      <View>
        <Text>{cart}</Text>
        <ShopMain
            cart={cart}
            setCart={setCart}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}

//Cart page
function CartPage({navigation}){
  return(
    <ScrollView style={styles.android}>
      <View>
        <CartMain/>
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