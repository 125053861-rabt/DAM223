/* Zona importaciones */
import { StyleSheet, View, Text} from 'react-native';

/* main */
export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <Text>Equipo: Natalia Zarate Cabanillas</Text>
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