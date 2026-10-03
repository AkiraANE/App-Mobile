import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Locais(props) {
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Os locais filiados do Akira's Sushi Bar</Text>

    <FlatList
    data={locais}

    renderItem={({ item })=>
    <View style={estilo.locais}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
    <Text style={estilo.txtlocais}> {item.nome} </Text>
    </TouchableOpacity>
    <View style={estilo.rede}>
    <Text style={estilo.estrelas}>
      <MaterialCommunityIcons
      name="star"
      size={20}
      color={'yellow'}
      />
      {item.estrelas} Estrelas
      </Text>
      <Text style={estilo.acessos}>
      <MaterialCommunityIcons
      name="account"
      size={20}
      color={'blue'} 
      /> 
      {item.acessos} Acessos
      </Text>
      </View>
       </View>
}
/>
</View>
  );
}

const locais = [
  {
    uid:1,
    nome:'Bela Vista',
    estrelas: 4,
    acessos: 2345,
    buttom: 'Bela_Vista'
  },

   {
    uid:2,
    nome:'Cumbica',
    estrelas: 3,
    acessos: 1045,
    buttom: 'Cumbica'
  },

  {
    uid:3,
    nome:'Santa Emília',
    estrelas: 4,
    acessos: 4345,
    buttom: 'Santa_Emilia'
  },

   {
    uid:4,
    nome:'Vila União',
    estrelas: 5,
    acessos: 7845,
    buttom: 'Vila_Uniao'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFEBEB'
  },

  locais: {
    backgroundColor: '#EBECFF',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },

  titulo: {
   fontSize: 30,
    textAlign: 'center',
    fontWeigth: 700,
    marginVertical: 30,
    color:'#4B0082',
    fontWeight: 'bold'
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txtlocais: {
    fontSize: 20,
  },
});