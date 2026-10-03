import React from 'react';
import{View, Text, StyleSheet, ScrollView} from 'react-native';

export default function (){
  const descricao= `Localizado em um ponto estratégico e acolhedor, o Akira's Sushi traz o melhor da gastronomia japonesa com foco nos clássicos mais amados. Nossa filial no bairro Vila União combina praticidade, sabor e ingredientes de altíssima qualidade para oferecer uma experiência marcante a cada pedido.

O Ambiente
Nosso espaço une conforto, modernidade e um design inspirado no minimalismo oriental. É o lugar ideal para um almoço saboroso, um jantar descontraído após o trabalho ou um momento especial com amigos e família, sempre acompanhado de um atendimento atencioso e ágil.

Nosso Menu
Trabalhamos com um cardápio enxuto e focado no que fazemos de melhor, garantindo frescor e crocância em cada prato:

Temakis: Enrolados artesanais bem recheados e com alga sempre crocante.

Hot Rolls: Sushis empanados e fritos no ponto certo, crocantes por fora e macios por dentro.

Yakisoba: Macarrão artesanal preparado na chapa com legumes frescos e molho especial da casa.

Gyozas: Trouxinhas orientais douradas na medida, recheadas e cheias de sabor.

Informações de Atendimento 
Endereço: Rua Asteroide n° 129 - Vila União

Horário de Funcionamento:

Terça a Sexta-feira: 11h30 às 15h00 | 18h30 às 23h00

Sábado e Domingo: 12h00 às 23h30

Reservas e Delivery: 11 94002-8922

Redes Sociais: @akirassushibar

Venha nos visitar na Vila União ou peça pelo delivery para saborear o melhor do Akira's Sushi!`;

return(
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}></Text>

      <Text style={styles.subtitulo}>
      Filial Vila União
      </Text>

      <View style={styles.resumo}>
        <Text style={styles.textoResumo}>
          {descricao}
        </Text>
      </View>
    </View>
  </ScrollView>
);
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#a4d2f7',
    paddingBottom:30
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    color:'#ffffff',
    fontWeight:'700',
    marginTop:50,
    marginBottom:10
  },
  subtitulo:{
    fontSize:20,
    textAlign:'center',
    color:'#1f3fb7',
    marginBottom:20
  },
  resumo:{
    marginHorizontal:15,
    backgroundColor:'#ffffff70',
    borderRadius:7,
    padding:12
  },
  textoResumo:{
    fontSize:19,
    lineHeight:32,
    color:'#222'
  }
});