import { StyleSheet } from "react-native";

const estilos = StyleSheet.create ({

container:{
 flex:1,
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'#2c2e2d',
 padding:15,
},

logo:{
    width:80,
    height:80,
    borderRadius:100,
    marginBottom:10
},

texto:{
    color:'white',
    fontSize:16,
    paddingBottom:25
},

textoIcone:{
    fontSize:26,
    fontWeight:'bold',
    color:'#08912A',
    marginBottom:10
},

textoCard:{
   color:'white',
   marginLeft:40,
   marginTop:40,
   fontSize:14,
},

card:{
    flexDirection:'row',
    padding:10,
    backgroundColor:'#08912A',
    width:300,
    marginBottom:15,
    borderRadius:20,
    textAlign:'center'
},

img:{
    width:80,
    height:100,
    flexDirection:'row',
},
cardImg:{
    width:80,
    height:100,
    
},
cardImg2:{
    width:80,
    height:100,
}
})

export default estilos;