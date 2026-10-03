import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Temaki(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Temaki </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Temaki1.jpg')}
      />
      <Text style={estilo.rotulo}> Apetitoso </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Temaki2.jpg')}
      />
      <Text style={estilo.rotulo}> Suculento </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Temaki3.jpg')}
      />
      <Text style={estilo.rotulo}> Sensacional </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
       Cone feito com alga nori crocante, recheado com arroz temperado no ponto certo, cubos generosos de salmão fresco e cream cheese aveludado, finalizado com cebolinha picada e gergelim tostado.

        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const estilo= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#a4d2f7',
  },
  img:{
    width:330,
    height:400,
    marginHorizontal:25,
    borderRadius:10,
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    color:'#ffffff',
    fontWeight:700,
    marginTop:50,
    marginBottom:30,
  },
  rotulo:{
    textAlign:'center',
    marginTop:20,
    fontSize:20,
  },
  resumo:{
    marginTop:20,
    marginHorizontal:15,
    backgroundColor:'#ffffff70',
    borderRadius:7,
    padding:8,
  },
  textoResumo:{
    fontSize:19,
  },
});