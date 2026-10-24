/* Zona importaciones */
import { StyleSheet, View, Text} from 'react-native';

/* main */
export default function FlatList2Screen() {
  return (
    <View style={styles.container}>
      <Text>Equipo: Gael Sanchez Peralta</Text>
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