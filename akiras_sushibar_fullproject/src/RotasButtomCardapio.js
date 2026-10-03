import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Gyoza from './cardapio/Gyoza';
import Yakisoba from './cardapio/Yakisoba';
import Temaki from './cardapio/Temaki';
import Hot_roll from './cardapio/Hot_roll';
import Cardapio from './pages/Cardapio';


const Stack= createStackNavigator();

export default function RotasButtomCardapio(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Cardapio" component={Cardapio} options= {{headerShown:false}} />
    <Stack.Screen name="Gyoza" component={Gyoza} options= {{ title: "Gyoza"}}/>
    <Stack.Screen name="Yakisoba" component={Yakisoba} options= {{ title: "Yakisoba"}}/>
    <Stack.Screen name="Temaki" component={Temaki} options= {{ title: "Temaki"}}/>
    <Stack.Screen name="Hot_roll" component={Hot_roll} options= {{ title: "Hot roll"}}/>
  </Stack.Navigator>
  );
}
