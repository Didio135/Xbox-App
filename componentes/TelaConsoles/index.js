import React from 'react-native';
import {View, Text, Image, ScrollView} from 'react-native';
import estilos3 from './estilos3'

import imgConsole from '../../assets/console-1-2.png';
import imgConsole2 from '../../assets/console-2.png';


export default function TelaConsoles() {
    return (
        <View style={estilos3.container}>
          
        <ScrollView>

          <Image style={estilos3.imgConsole} source={imgConsole}/>

          <Text style={estilos3.titulo}>XBOX SERIES S</Text>

          <Text style={estilos3.subtitulo}>Desempenho de última geração no menor Xbox de todos os tempos</Text>

          <Text  style={estilos3.texto}>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.</Text>

          <Image style={estilos3.imgConsole2} source={imgConsole2}/>

          <Text style={estilos3.titulo}>XBOX SERIES X </Text>

          <Text style={estilos3.subtitulo}>O Xbox mais rápido e poderoso de todos os tempos.</Text>

          <Text style={estilos3.texto}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text> 

          </ScrollView> 

        </View>
    )
  };
