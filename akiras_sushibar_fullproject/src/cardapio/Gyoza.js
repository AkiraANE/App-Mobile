import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Gyoza(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Gyoza </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Gyoza1.jpg')}
      />
      <Text style={estilo.rotulo}> Delicioso </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Gyoza2.jpg')}
      />
      <Text style={estilo.rotulo}> Saboroso </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Gyoza3.jpg')}
      />
      <Text style={estilo.rotulo}> Gostoso </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
        Lombinho suíno moído e temperado com gengibre fresco, alho e óleo de gergelim, envolto em massa fina e leve. Grelhado perfeitamente para garantir uma base dourada e crocante, finalizado no vapor para manter a maciez e a suculência.
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