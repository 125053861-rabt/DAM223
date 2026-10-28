/* Zona importaciones */
import { StyleSheet, View} from 'react-native';
import { SafeAreaProvide} from 'react-native-safe-area-content';
import MenuScreen from './screen/MenuScreen';

/* main */
export default function App() {
  return (
    <SafeAreaProvide>
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
    </View>
    </SafeAreaProvide>
    
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