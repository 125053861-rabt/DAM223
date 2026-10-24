/* Zona importaciones */
import { StyleSheet, View, Text} from 'react-native';

/* main */
export default function TextInputScreen() {
  return (
    <View style={styles.container}>
      <Text>Equipo: Jesus Rojo Uribe</Text>
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
});