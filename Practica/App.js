import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Platform, TextInput, Switch, Button} from 'react-native';

const alerta = (titulo, mensaje) => {
  if(Platform.OS == 'web'){
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje)
  }
} 

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deporte, setDeporte] = useState(false);

  const registrar = () => {
    const faltantes = [];

    if(nombre.trim() === ''){
      faltantes.push('Nombre');
    }
    if(carrera.trim() === ''){
      faltantes.push('Carrera');
    }
    if(semestre.trim() === ''){
      faltantes.push('Semestre');
    }
    if (faltantes.length > 0) {
      alerta('Campos incompletos', 'Debes llenar todos los campos');
      return;
    }

    /* Para detectar si es int */
    if(parseInt(semestre.trim()) != semestre.trim()){
      alerta('Error', 'El semestre debe ser un numero entero');
      return;
    }

    const textoTaller = taller ? 'Sí' : 'No';
    const textoConstancia = constancia ? 'Sí' : 'No';
    const textoDeporte = deporte ? 'Sí' : 'No';

    alerta(
      'Registro enviado', 
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${textoTaller}\nConstancia: ${textoConstancia}\nDeportes: ${textoDeporte}`
    );

    // Limpiar campos
    setNombre('');
    setCarrera('');
    setSemestre('');
    setTaller(false);
    setConstancia(false);
    setDeporte(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.opcion}>Opciones</Text>

      <View style={styles.switch}>
        <Text style={styles.switchText}>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.switch}>
        <Text style={styles.switchText}>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.switch}>
        <Text style={styles.switchText}>¿Participará en deportes?</Text>
        <Switch value={deporte} onValueChange={setDeporte} />
      </View>

      <View style={styles.boton}>
        <Button title="Enviar registro" onPress={registrar} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  opcion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    width: '100%',
    paddingHorizontal: 10,
  },
  switchText: {
    fontSize: 16,
  },
  boton: {
    marginTop: 20,
  }
});