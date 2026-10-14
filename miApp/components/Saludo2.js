
import {View,Button, Text, Image} from 'react-native'

export const Saludo2= ()=>{
    return(
        <View>
        <Text> Hola RN:Componentes Propios</Text>
        <Image source={require('../assets/wave.jpeg')}/>
        <Button title="Hola Crayola"></Button>
        </View>
    )
}