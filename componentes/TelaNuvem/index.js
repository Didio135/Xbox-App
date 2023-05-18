import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import imgFundo from '../../assets/fundo-xcloud.png';
import imgxcloud from '../../assets/xcloud-2.png';
import estilos4 from './estilos4';


export default function TelaNuvem() {
    return (
        <ImageBackground style={estilos4.container} source={imgFundo}>

          <Text style={estilos4.titulo}>Xbox Cloud Gaming </Text>

          <Text style={estilos4.subtitulo}>Serviço de streaming de jogos</Text>

          <Text style={estilos4.texto}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.
</Text>

          <Text style={estilos4.texto}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>

          <Text style={estilos4.texto}>Através de uma assinatura você terá um XBOX virtual sempre que precisar</Text>


          <Image style={estilos4.img} source={imgxcloud}/>





        </ImageBackground>
    );
  }