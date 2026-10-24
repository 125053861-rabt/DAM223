/* Zona importaciones */
import { StyleSheet, View, Text} from 'react-native';

/* main */
export default function SafeScreen() {
  return (
    <View style={styles.container}>
      <Text>Aqui va la practica 10</Text>
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