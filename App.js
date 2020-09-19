import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './MainComponents/MainComponent';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      {/*Just to set header from scrollview*/}
      <Text>Open up.js to start working on your app!</Text>
      <Text>Open up.js to start working on your app!</Text>
      <Text>Open up.js to start working on your app!</Text>
      <View style={styles.main}>
        <Main />
      </View>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
