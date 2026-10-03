import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Cardapio from './RotasButtomCardapio';
import Home from './pages/Home';
import Locais from './RotasButtomLocais';
import Sobre from './pages/Sobre';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator 
    initialRouteName='Home' 
    tabBarOptions={{ activeTintColor:'#F08080' }}>
      <Tab.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Locais"
        component={Locais}
        options={{
          tabBarLabel: 'Filiais',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
}
