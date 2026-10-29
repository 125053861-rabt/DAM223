/* Zona importaciones */
import { StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuScreen from './screen/MenuScreen';

/* main */
export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
    </View>
    </SafeAreaProvider>
    
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