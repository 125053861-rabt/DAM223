import React from 'react';
import {SafeAreaView,View,Text,Pressable,StyleSheet} from 'react-native';
import {router,useLocalSearchParams} from 'expo-router';

export default function DetalleUsuarioScreen() {
  const params = useLocalSearchParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const nombre = typeof params.nombre === 'string' ? params.nombre : 'Sin nombre';
  const edad = typeof params.edad === 'string' ? params.edad : '';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Detalle del Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.info}>{nombre}</Text>

        <Text style={styles.label}>Edad</Text>
        <Text style={styles.info}>{edad} años</Text>

        <Pressable
          style={styles.boton}
          onPress={() => router.push({
            pathname: '/actualiza',
            params: {id, nombre, edad},
          })}
        >
          <Text style={styles.textoBoton}>Actualizar usuario</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario} onPress={() => router.back()}>
          <Text style={styles.textoBotonSecundario}>Volver al listado</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    color: '#4B5563',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotonSecundario: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
