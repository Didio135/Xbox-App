import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './componentes/TelaInicio';
import TelaConsoles from './componentes/TelaConsoles/index';
import TelaJogos from './componentes/TelaJogos/index';
import TelaNuvem from './componentes/TelaNuvem/index';



const Stack = createStackNavigator();



export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tela Inicio" component = { TelaInicio } />
      <Stack.Screen name="Tela Consoles" component = { TelaConsoles } />
      <Stack.Screen name="Tela Jogos" component = { TelaJogos } />
      <Stack.Screen name="Tela Nuvem" component = { TelaNuvem } />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


