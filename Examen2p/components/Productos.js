import {useState} from 'react';
import {Text, View, Button, Pressable, Alert, Platform, StyleSheet} from 'react-native';

const alerta = (mensaje) => {
  if(Platform.OS == 'web'){
    window.alert(`${mensaje}`);
  } else {
    Alert.alert(mensaje)
  }
} 

export const Productos = ({nombre,descripcion,precio})=>{
    const[producto,setProducto]= useState (false);
    const aviso = () => {
        alerta(`Producto seleccionado ${nombre}\nPrecio: ${precio}`);
    }
    return(
        <View>
         <Text> {nombre} </Text>
        <>
        <Text> {descripcion} </Text>
        <Text> {precio} </Text>
        </>
         <Pressable style={styles.boton} onPress={ ()=> {setProducto(!producto), aviso() }}>
            <Text>Ver Producto</Text>
         </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  }, 
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto:{
    fontSize: 20,
    marginVertical: 25,
  },
  boton:{
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },
  textoBoton: {
    color: 'white',
    fontSize:10,
    fontWeight: 'bold',
  }
});
