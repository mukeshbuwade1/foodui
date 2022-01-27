import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import colors from './assets/colors/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});





