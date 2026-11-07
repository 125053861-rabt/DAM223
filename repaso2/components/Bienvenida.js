import { Text, StyleSheet, View, Image } from "react-native";

export default function Bienvenida() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/libro.png')}
        style={styles.imagen}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Bienvenido a nuestro Repaso 2</Text>

      <View style={styles.equipoBlock}>
        <Text style={styles.equipoEtiqueta}>Equipo:</Text>
        <Text style={styles.integrante}>Bretón Téllez René Alberto</Text>
        <Text style={styles.integrante}>Galván Ramírez Andrea Amairani</Text>
        <Text style={styles.integrante}>Rangel Campos Schoenstatt Judith</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },


  imagen: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },


  equipoBlock: {
    width: '100%',
    maxWidth: 350,
  },


  equipoEtiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  integrante: {
    fontSize: 15,
    color: '#555555',
    marginVertical: 3,
    paddingLeft: 8,
  },
});