import { Switch, StyleSheet, Text, View} from "react-native"
import { useState } from "react"

export const Productos = ()=>{
    const[cafe,setCafe]= useState (false);
    const[hamburguesa,setHamburguesa]= useState (false);
    const[sandwich,setSandwich]= useState(false);

    

    return(
        <View>
         <Text> Personaliza tu pedido </Text>
         <Switch value={cafe} onValueChange={setCafe}>{cafe ? <Text>Seleccionado</Text> : <Text>No Seleccionado</Text>}</Switch>
         <Switch value={hamburguesa} onValueChange={setHamburguesa}>{hamburguesa ? <Text>Seleccionado</Text> : <Text>No Seleccionado</Text>}</Switch>
         <Switch value={sandwich} onValueChange={setSandwich}>{sandwich ? <Text>Seleccionado</Text> : <Text>No Seleccionado</Text>}</Switch>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  }, 
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto:{
    fontSize: 20,
    marginVertical: 25,
  },
  boton:{
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },
  textoBoton: {
    color: 'white',
    fontSize:10,
    fontWeight: 'bold',
  }
});
