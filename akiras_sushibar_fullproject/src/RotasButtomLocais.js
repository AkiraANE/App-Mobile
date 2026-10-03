import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Bela_Vista from './locais/Bela_Vista';
import Cumbica from './locais/Cumbica';
import Santa_Emilia from './locais/Santa_Emilia';
import Vila_Uniao from './locais/Vila_Uniao';
import Locais from './pages/Locais';

const Stack= createStackNavigator();

export default function RotasButtomLocais(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Locais" component={Locais} options= {{headerShown:false}} />
    <Stack.Screen name="Bela_Vista" component={Bela_Vista} options= {{ title: "Bela Vista"}}/>
    <Stack.Screen name="Cumbica" component={Cumbica} options= {{ title: "Cumbica"}}/>
    <Stack.Screen name="Santa_Emilia" component={Santa_Emilia} options= {{ title: "Santa Emilia"}}/>
    <Stack.Screen name="Vila_Uniao" component={Vila_Uniao} options= {{ title: "Vila União"}}/>
  </Stack.Navigator>
  );
}
