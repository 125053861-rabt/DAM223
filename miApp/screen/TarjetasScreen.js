/* Zona importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Perfil} from '../components/Perfil';

/* main */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil
      nombre = "Nombre: Rene"
      carrera = "Carrera: TIID"
      materia= "Materia: Desarrollo movil"
      cuatri= "Cuatrimestre: 4"
      style={styles.tarjeta1}></Perfil>

      <Perfil
      nombre = "Nombre: Jorge"
      carrera = "Carrera: Negocios Internacionales"
      materia= "Materia: Movil Desarrollador"
      cuatri= "Cuatrimestre: 6"
      style={styles.tarjeta2}></Perfil>

      <Perfil
      nombre = "Nombre: Aza"
      carrera = "Carrera: Transmecanico"
      materia= "Materia: Movil Desarrollador"
      cuatri= "Cuatrimestre: 5"
      style={styles.tarjeta3}></Perfil>
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
    flexDirection:'row',
  },
  tarjeta1:{backgroundColor:'red'},
  tarjeta2:{backgroundColor:'blue'},
  tarjeta3:{backgroundColor:'orange'},
});