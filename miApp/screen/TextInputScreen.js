/* Zona importaciones */
import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';

const mostrarAlerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
}

/* main */
export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const registrar = () => {
    const faltantes = [];
    
    if (nombre.trim() === '') {
      faltantes.push('Nombre');
    }
    if (correo.trim() === '') {
      faltantes.push('Correo');
    }
    if (telefono.trim() === '') {
      faltantes.push('Telefono');
    }
    
    if (faltantes.length > 0) {
      mostrarAlerta('Faltan datos', 'Completa ' + faltantes.join(', '));
      return;
    }

    if (!correo.includes('@')) {
      mostrarAlerta('Correo Invalido', 'El correo debe tener el formato correcto');
      return;
    }
    
    if (telefono.length !== 10) {
      mostrarAlerta('Telefono invalido', 'Debe tener 10 digitos');
      return;
    }

    mostrarAlerta('Datos registrados correctamente', `Nombre: ${nombre}\nCorreo: ${correo}\nTelefono: ${telefono}`);
    
    setNombre('');
    setCorreo('');
    setTelefono('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de datos</Text>
      
      <Text>Nombre</Text>
      <TextInput 
        style={styles.input} 
        placeholder="nombre" 
        value={nombre} 
        onChangeText={setNombre} 
      />

      <Text>Correo</Text>
      <TextInput 
        style={styles.input} 
        placeholder="correo" 
        value={correo} 
        onChangeText={setCorreo} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />

      <Text>Telefono</Text>
      <TextInput 
        style={styles.input} 
        placeholder="telefono" 
        value={telefono} 
        onChangeText={setTelefono} 
        keyboardType="numeric" 
        maxLength={10} 
      />

      <Button title="Registrar" onPress={registrar} />
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
    flexDirection: 'column',
    width: '100%',
    margin: 20,
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 3,
    marginBottom: 2,
  },
});