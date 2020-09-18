import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/MainComponent';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      {/*Just to set header from scrollview*/}
      <Text>Open up.js to start working on your app!</Text>
      <Text>Open up.js to start working on your app!</Text>
      <Text>Open up.js to start working on your app!</Text>
      <Main />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
