import { StyleSheet } from "react-native";

const estilos2 = StyleSheet.create ({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:1,
        backgroundColor:'#2c2e2d'

    },

    titulo:{
        fontSize:22,
        textAlign:'center',
        color:'#08912A',
        fontWeight:'bold',
        marginBottom:15,
        marginTop:25
    },

    texto:{
        marginBottom:20,
        fontSize:15,
        textAlign:'center',
        color:'white'
    },

    texto1:{
      marginTop:10,
      marginBottom:50,
      textAlign:'center',
      fontSize:14,
      width:390,
      color:'white'

    },
    textoCard:{
     fontSize:17,
     backgroundColor:'rgb(28,28,28)',
     color:'white'
     

    },

    card:{
        height:250,
        width:380,
        alignSelf:'center', 
    },

})
export default estilos2;