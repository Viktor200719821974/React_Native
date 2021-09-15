import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from './components/Users';
export default function App() {
  return (
    <View style={styles.container}>
     <Users/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
