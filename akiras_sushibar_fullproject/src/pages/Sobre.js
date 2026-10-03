import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Home(){
  return(
    
    <View style={estilo.container}>
    <ScrollView>
      <Text style={estilo.titulo}> Sobre o projeto: </Text>
      <Text style={estilo.subtitulo}> App Akira's Sushi Bar </Text>
      <View style={estilo.resumo}>
       <Text style={estilo.demarcacao}> Desenvolvedores: </Text>
       <Text style={estilo.frase}>
          {'\n'}
          Akira Andrew Nakata Enoc {'\n'}
          William Samuel Rocha Barbosa </Text>
        <Text style={estilo.demarcacao}> Objetivo: </Text>
          <Text style={estilo.frase}>
              Este aplicativo tem como objetivo divulgar e comercializar o restaurante temático japonês chamado "Akira's Sushi Bar". Nele, seria           disponibilidado o cardápio para os clientes e seus locais mais famosos. {'\n'}
          </Text>
        <Text style={estilo.demarcacao}> Tecnologias utilizadas: </Text>
          <Text style={estilo.frase}>
            {'\n'} StyleSheet {'\n'} Text {'\n'} View {'\n'} ScrollView {'\n'} React {'\n'} FlatList {'\n'} TouchableOpacity {'\n'} ImageBackground {'\n'} Image {'\n'} MaterialCommunityIcons {'\n'} NavigationContainer {'\n'} createStackNavigator {'\n'} createBottomTabNavigator 
          </Text>
      </View>
    </ScrollView>
    </View>
  );
}

const estilo= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFEBEB',
    alignItems: 'center',
  height:300,
  justifyContent: 'center',
  },

  titulo:{
    fontSize:30,
    textAlign:'center',
    fontWeight:'700',
    marginTop:50,
    marginBottom:10,
    color:'#4B0082'
  },
  subtitulo:{
    fontSize:20,
    textAlign:'center',
    color:'#1f3fb7',
    marginBottom:20
  },
  demarcacao:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  frase:{
    fontSize:15,
    lineHeight:32,
    color:'#222'
  },
  resumo:{
    marginHorizontal:15,
    backgroundColor:'#EBECFF',
    borderRadius:7,
    padding:12
  }
});