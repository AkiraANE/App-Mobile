import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Cardapio(props) {
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Os melhores pratos</Text>

    <FlatList
    data={cardapio}

    renderItem={({ item })=>
    <View style={estilo.cardapio}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
    <Text style={estilo.txtcardapio}> {item.nome} </Text>
    </TouchableOpacity>
    <View style={estilo.rede}>
    <Text style={estilo.curtidas}>
      <MaterialCommunityIcons
      name="thumb-up"
      size={20}
      color={'#F00'}
      />
      {item.like} Curtidas
      </Text>
      <Text style={estilo.pedidos}>
      <MaterialCommunityIcons
      name="account-heart"
      size={20}
      color={'blue'} 
      /> 
      {item.pedidos} Pedidos
      </Text>
      </View>
       </View>
}
/>
</View>
  );
}

const cardapio = [
  {
    uid:1,
    nome:'Gyoza',
    like: 234,
    pedidos: 2345,
    buttom: 'Gyoza'
  },

   {
    uid:2,
    nome:'Hot roll',
    like: 900,
    pedidos: 3345,
    buttom: 'Hot_roll'
  },

  {
    uid:3,
    nome:'Temaki',
    like: 850,
    pedidos: 4345,
    buttom: 'Temaki'
  },

   {
    uid:4,
    nome:'Yakisoba',
    like: 250,
    pedidos: 345,
    buttom: 'Yakisoba'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFEBEB'
  },

  cardapio: {
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

  txtcardapio: {
    fontSize: 20,
  },
});
