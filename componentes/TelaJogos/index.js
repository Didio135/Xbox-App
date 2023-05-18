import React from 'react-native';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import estilos2 from './estilos2';

import fundo1 from '../../assets/jogo-3.png';
import fundo2 from '../../assets/jogo-2.png';
import fundo3 from '../../assets/jogo-4.png';



export default function TelaJogos() {
    return (
        <View style={estilos2.container}>

             <ScrollView>

             <Text style={estilos2.titulo}>Jogos em 4K</Text>
             <Text style={estilos2.texto}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

             <ImageBackground style={estilos2.card} source={fundo1}>
                <Text style={estilos2.textoCard}> Forza Horizon 5</Text>
             </ImageBackground>
             <Text style={estilos2.texto1}>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.</Text>

             <ImageBackground style={estilos2.card} source={fundo2}>
                <Text style={estilos2.textoCard}>Cyberpunk 2077</Text>
             </ImageBackground>

            <Text style={estilos2.texto1}>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>

            <ImageBackground style={estilos2.card} source={fundo3}>
                <Text style={estilos2.textoCard}> Halo 5</Text>
             </ImageBackground>
             <Text style={estilos2.texto1}>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
             
             </ScrollView>

        </View>
    );
  }