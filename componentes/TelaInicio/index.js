import React from 'react-native';
import {View, Image, Text, Pressable} from 'react-native';

import imgfundo from '../../assets/logo.png';
import imgConsole from '../../assets/console-1.png';
import imgJogo from '../../assets/jogo-1.png';
import imgXcloud from '../../assets/xcloud-1.png';
import estilos from './estilos'

export default function TelaInicio(props) {
    return (
        <View style={estilos.container}>
          <Image source={imgfundo} style={estilos.logo} />
          <Text style={estilos.textoIcone}>Xbox</Text>
          <Text style={estilos.texto}>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

          <Pressable 
            style={estilos.card}
            onPress={()=>{props.navigation.navigate("Tela Consoles")}}>

          <Image style={estilos.img} source={imgConsole}  />
          <Text style={estilos.textoCard}>Conheça os consoles</Text>  
          </Pressable>

          <Pressable 
            style={estilos.card}
            onPress={()=>{props.navigation.navigate("Tela Jogos")}}>

            <Image source={imgJogo} style={estilos.cardImg}/>
            <Text style={estilos.textoCard}>Conheça os Jogos</Text>

          </Pressable>

          <Pressable 
            style={estilos.card}
            onPress={()=>{props.navigation.navigate("Tela Nuvem")}}>

            <Image style={estilos.cardImg2} source={imgXcloud}  />
            <Text style={estilos.textoCard}>Conheça o xCloud</Text>  
          </Pressable>

          

        </View>
    );
  }