/* Zona importaciones */
import { StyleSheet, View} from 'react-native';
import MenuScreen from './screen/MenuScreen';

/* main */
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
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