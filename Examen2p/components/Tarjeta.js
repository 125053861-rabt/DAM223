import { useState } from 'react';
import {Text, Pressable,View} from 'react-native'

export const Tarjeta = ()=>{

    return(
        <View>
        <Text> Tarjeta Producto </Text>
        <Pressable onPress={() => aviso()}>
            <Text>Ver Producto</Text>
        </Pressable>
        </View>
        
    )
}