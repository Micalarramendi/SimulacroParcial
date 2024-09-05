import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Componente01 from './src/ParcialSimulacro/Componente01';
//import Props02 from './src/ParcialSimulacro/Props02';
//import Axios03 from './src/ParcialSimulacro/Axios03';
//import AsyncStorage04 from './src/ParcialSimulacro/AsyncStorage04';

import Componente1 from './src/ParcialMica/Componente1';
import Props2 from './src/ParcialMica/Props2';
import Axios3 from './src/ParcialMica/Axios3';
import AsyncStorage4 from './src/ParcialMica/AsyncStorange4';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Componente1">
        <Stack.Screen name="Componente1" component={Componente1} />
        <Stack.Screen name="Props2" component={Props2} />
        <Stack.Screen name="Axios3" component={Axios3} />
        <Stack.Screen name="AsyncStorage4" component={AsyncStorage4}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
