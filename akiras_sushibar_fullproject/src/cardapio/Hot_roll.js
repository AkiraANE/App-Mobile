import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Hot_roll(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Hot roll </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Hotroll1.jpg')}
      />
      <Text style={estilo.rotulo}> Delicioso</Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Hotroll2.jpg')}
      />
      <Text style={estilo.rotulo}> Saboroso </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Hotroll3.jpg')}
      />
      <Text style={estilo.rotulo}> Gostoso </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
        Saboroso salmão e cream cheese cremoso envolvidos em arroz temperado e alga marinha, empanados e fritos até atingirem uma crocância perfeita. Servido quentinho, finalizado com cebolinha fresca e um toque de molho tarê adocicado.

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