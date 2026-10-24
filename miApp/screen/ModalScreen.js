/* Zona importaciones */
import { StyleSheet, View, Text} from 'react-native';

/* main */
export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text>Equipo:  Iancarlo Abreu Martinez</Text>
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