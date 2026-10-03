import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Yakisoba(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Yakisoba </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Yakisoba1.jpg')}
      />
      <Text style={estilo.rotulo}> Suculento </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Yakisoba2.jpg')}
      />
      <Text style={estilo.rotulo}> Sensacional </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../assets/fotosComidas/Yakisoba3.jpg')}
      />
      <Text style={estilo.rotulo}> Apetitoso </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
        Massa artesanal salteada na wok com tiras suculentas de carne e frango, acompanhada de legumes frescos e crocantes (brócolis, acelga, cenoura e pimentão), envolvidos no nosso autêntico molho oriental levemente encorpado e aromatizado com óleo de gergelim.

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