/* Zona importaciones */
import { StyleSheet, View, Text, Switch, Pressable} from 'react-native';
import { useState } from 'react';

/* main */
export default function PressableScreen() {
  const [encendido,setEncendido] = useState(false);
  const [contador,setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Practica Switch y Pressable</Text>

      <Switch value={encendido} onValueChange={(valor) => setEncendido(valor)}></Switch>
      <Text style={styles.texto}>El switch esta: {encendido ? 'Encendido' : 'Apagado'}</Text>
      <Pressable style={styles.boton} onPress={() => setContador(contador + 1)}>
        <Text style={styles.textoBoton}>Presioname</Text>
      </Pressable>
      <Text style={styles.texto}>Veces presionado: {contador}</Text>
    </View>
    
  );
}

/* estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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