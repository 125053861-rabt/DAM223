import {useState} from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

export const Perfil= ({nombre,carrera,materia,cuatri,style})=>{
    const[mostrar,setMostrar]= useState (false);
    return(
        <View style={[estilo.tarjeta,style]}>
        <Text style={estilo.nombres}> {nombre} </Text>
        { mostrar && 
        <>
        <Text style={estilo.carrera}> {carrera} </Text>
        <Text style={estilo.otroTexto}> {materia} </Text>
        <Text style={estilo.otroTexto}> {cuatri} </Text>
        
        </>
         }
         <Button title="Ver Perfil" onPress={ ()=>setMostrar(!mostrar) }></Button>
        </View>
    );
};

const estilo= StyleSheet.create({
    nombres:{
        fontSize:24,
        fontWeight:800,
        textTransform:'uppercase',
    },
    carrera:{
        fontSize:20,
        fontFamily:'Roboto',
        color:'purple',
    },
    otroTexto:{
        fontSize:18,
        fontFamily:'Courier',
        color:'blue',
        fontStyle:'italic',
    },
    tarjeta:{
        borderWidth:4,
        borderRadius:12,
        padding:15,
        margin:10,
    },
})