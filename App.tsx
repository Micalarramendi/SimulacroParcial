import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Componente01 from './src/Componente01';
//import Props02 from './src/Props02';
//import Axios03 from './src/Axios03';
//import AsyncStorage04 from './src/AsyncStorage04';


import ApiFetch from './src/Practica02/ApiFetch';
import DataManager from './src/Practica02/DataManager';
import MainComponent from './src/Practica02/MainComponent';
import UserDetails from './src/Practica02/UserDetails';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainComponent">
        <Stack.Screen name="MainComponent" component={MainComponent} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="ApiFetch" component={ApiFetch} />
        <Stack.Screen name="DataManager" component={DataManager}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
