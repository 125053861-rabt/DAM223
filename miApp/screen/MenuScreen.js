/* Zona importaciones */
import { StyleSheet, View, Text, Button} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';


/* main */
export default function MenuScreen() {
    const[screen,SetScreen] = useState('menu');

    switch(screen){
        case 'safe':
            return <SafeScreen></SafeScreen>;
        case 'press':
            return <PressableScreen></PressableScreen>;
        case 'tarjetas':
            return <TarjetasScreen></TarjetasScreen>
        case 'menu':
            default: return (
    <View style={styles.container}>
        <Text>Menu de Practicas</Text>
        <Button title="Practica Tarjetas" onPress={()=>SetScreen('tarjetas')}></Button>
        <Button title="Practica SafeAreaView" onPress={()=>SetScreen('safe')}></Button>
        <Button title="Practica Pressable" onPress={()=>SetScreen('press')}></Button>

    </View>
    
  );
} // Fin switch 

} // fin function

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