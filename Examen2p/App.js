import {StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Encabezado } from './components/Encabezado';
import { Tarjeta } from './components/Tarjeta';
import { Productos } from './components/Productos';
import { Personalizar } from './components/Personalizar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Antojo Express </Text>
      <Encabezado/>
       <Tarjeta/>
      
      
      
      <StatusBar style="auto" />

      <Productos
      nombre = "Café Americano"
      descripcion = "Café recien hecho de grano"
      precio= "$45.00"style={styles.tarjeta1}></Productos>

      <Productos

      nombre = "Hamburguesa Clasica"
      descripcion = "Con queso, tomate, lechuga y tomates frescos"
      precio= "$120.00" style={styles.tarjeta2}></Productos>

      <Productos
      nombre = "Sandwich Club"
      descripcion = "Pollo, tocino y aderezo especial"
      precio= "$95.00"style={styles.tarjeta3}></Productos>
      <Personalizar></Personalizar>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
