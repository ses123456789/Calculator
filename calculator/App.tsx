import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { themecontext } from './src/context/themecontext';
import { mycolors } from './src/styles/colors';
import Button from './src/components/button';
import MyKeyboard from './src/components/keyboard';
export default function App() {
  const[theme, settheme]= useState("light")
  return (
    <themecontext.Provider value={theme}>
    <View style = { theme ==='light'? styles.container:[styles.container,{ backgroundColor: "#000"}]}>
      
      <StatusBar style="auto" />     
      <Switch
       value={theme === 'light'}
        onValueChange={() => settheme(theme === 'light' ? 'dark' : 'light')}
      /> 
      <MyKeyboard />
    
    </View>
    </themecontext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mycolors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
