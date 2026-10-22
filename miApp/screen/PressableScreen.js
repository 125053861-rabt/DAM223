/* Zona importaciones */
import { StyleSheet, View} from 'react-native';

/* main */
export default function PressableScreen() {
  return (
    <View style={styles.container}>
      <Text>Aqui va la practica 11</Text>
      <Text>Equipo Karen</Text>
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