/* Zona importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Saludo} from './components/Saludo';
import { Saludo2} from './components/Saludo2';
import { Perfil} from './components/Perfil';

/* main */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo React Native :D</Text>
      <Image source={require('./assets/wave.jpeg')}/>
      <StatusBar style="auto" />
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Perfil></Perfil>
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
  },
});
