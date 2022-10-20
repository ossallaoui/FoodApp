
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Details from './components/Details';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular1: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  Icon.loadFont();

  const Stack = createNativeStackNavigator();
  return (
    /*<NavigationContainer>{/* Rest of your app code }/*
    <View style={styles.container}>
      <Text style={styles.text1}>Open up App.js to start  on your app!</Text>
      <Icon name="ios-person" size={30} color="#4F8EF7" />
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>*/
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, }}/>
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text1: {
    fontFamily: "Regular1",
    color: colors.secondary,
  }
  
});
