import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

export default function Home(){
  return(
    <View style={estilo.container}>
      <ImageBackground style={estilo.fundoimg} resizeMode="stretch" source={require('../assets/background.jpg')}>
      <Text style={estilo.titulo}> Akira's Sushi Bar </Text>
      <Image style={estilo.logoakira} source={require('../assets/logoakira.png')}/>
      </ImageBackground>
      
    </View>
  );
}

const estilo= StyleSheet.create({
  container:{
    flex:1,
    
  },
  fundoimg:{
    flex:1,
    justifyContent:'center'
  },
  titulo:{
    fontSize:30,
    textAlign: 'center',
    color:'#ffffff',
    fontWeight:'bold',
  },
  logoakira:{
  width:280,
  height:380,
  paddingLeft:390,
  justifyContent:'center',
  alignItems: 'center',
  opacity: 0.9
  }
});
