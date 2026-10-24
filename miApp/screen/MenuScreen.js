/* Zona importaciones */
import { StyleSheet, View, Text, Button} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import FlatList2Screen from './FlatList2Screen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalScreen from './ModalScreen';
import TextInputScreen from './TextInputScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';


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
        case 'flatlist':
            return <FlatListScreen></FlatListScreen>
        case 'flatlist2':
            return <FlatList2Screen></FlatList2Screen>
        case 'imagebackground':
            return <ImageBackgroundScreen></ImageBackgroundScreen>
        case 'modal':
            return <ModalScreen></ModalScreen>
        case 'textinput':
            return <TextInputScreen></TextInputScreen>
        case 'activityindicator':
            return <ActivityIndicatorScreen></ActivityIndicatorScreen>
        case 'menu':
            default: return (
    <View style={styles.container}>
        <Text>Menu de Practicas</Text>
        <Button title="Practica Tarjetas" onPress={()=>SetScreen('tarjetas')}></Button>
        <Button title="Practica SafeAreaView" onPress={()=>SetScreen('safe')}></Button>
        <Button title="Practica Pressable" onPress={()=>SetScreen('press')}></Button>
        <Button title="Practica TextInput" onPress={()=>SetScreen('textinput')}></Button>
        <Button title="Practica FlatList" onPress={()=>SetScreen('flatlist')}></Button>
        <Button title="Practica FlatList 2" onPress={()=>SetScreen('flatlist2')}></Button>
        <Button title="Practica ImageBackground" onPress={()=>SetScreen('imagebackground')}></Button>
        <Button title="Practica Modal" onPress={()=>SetScreen('modal')}></Button>
        <Button title="Practica Activity Indicator" onPress={()=>SetScreen('activityindicator')}></Button>

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