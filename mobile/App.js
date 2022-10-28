import * as React from 'react';
import AppNavigation from './AppNavigation';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import  {COLORS}  from './common';


function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar animated={true} backgroundColor={COLORS.primary} />
      <AppNavigation />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  }
})  