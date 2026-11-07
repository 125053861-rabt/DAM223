import { useState } from "react";
import { 
  TextInput, 
  View, 
  Text, 
  FlatList, 
  Alert, 
  Button, 
  Platform, 
  ActivityIndicator, 
  ImageBackground,
  StyleSheet 
} from "react-native";

const alerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function Libreria() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [indicator, setIndicator] = useState(true);
  const [libros, setLibros] = useState([
    { id: 1, titulo: "Leyendas", autor: "Ramon", genero: "Generoso" },
    { id: 2, titulo: "Don Quijote de la mancha", autor: "rene", genero: "Ciencia " }
  ]);

  const nuevoLibro = {
    id: libros.length + 1,
    titulo: titulo,
    autor: autor,
    genero: genero
  };

  const tiempo = () => {
    setIndicator(true);
    setLibros([...libros, nuevoLibro]);
  };

  const registrar = () => {
    const faltantes = [];
    if (titulo.trim() === '') faltantes.push("Titulo");
    if (autor.trim() === '') faltantes.push("Autor");
    if (genero.trim() === '') faltantes.push("Genero");

    if (faltantes.length > 0) {
      alerta("Faltan Datos", "Completa " + faltantes.join(","));
      return;
    }
    alerta("Datos correctos", "Libro registrado con exito");

    setIndicator(false);
    setAutor("");
    setTitulo("");
    setGenero("");
    setTimeout(() => tiempo(), 4000);
  };

  return (
    <ImageBackground 
      source={require('../assets/biblioteca.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* ENTRADAS DE TEXTO */}
        <TextInput 
          placeholder="Titulo de libro" 
          placeholderTextColor="#ccc" 
          value={titulo} 
          onChangeText={setTitulo} 
          style={styles.input}
        />
        <TextInput 
          placeholder="Autor" 
          placeholderTextColor="#ccc" 
          value={autor} 
          onChangeText={setAutor} 
          style={styles.input}
        />
        <TextInput 
          placeholder="Genero" 
          placeholderTextColor="#ccc" 
          value={genero} 
          onChangeText={setGenero} 
          style={styles.input}
        />
        
        {/* BOTÓN O CARGANDO */}
        <View style={styles.botonContainer}> 
          {indicator ? (
            <Button title="Agregar Libro" onPress={registrar} />
          ) : (
            <ActivityIndicator color="#00fbff" size="large" />
          )}
        </View>

        {/* CONTADOR DE LIBROS */}
        <Text style={styles.contadorTexto}>Libros en total: {libros.length}</Text>

        {/* LISTA DE LIBROS */}
        <FlatList 
          data={libros} 
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.tarjetaLibro}>
              <Text style={styles.textoLibro}><Text style={styles.etiqueta}>Titulo:</Text> {item.titulo}</Text>
              <Text style={styles.textoLibro}><Text style={styles.etiqueta}>Autor:</Text> {item.autor}</Text>
              <Text style={styles.textoLibro}><Text style={styles.etiqueta}>Genero:</Text> {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,   
    width: '100%', 
    height: '100%',    
  },


  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },

  input: {
    backgroundColor: '#e5e4e4', 
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16, 
    color: '#000',
  },


  botonContainer: {
    marginVertical: 20,
  },


  contadorTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },


  tarjetaLibro: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#00fbff',
  },

  textoLibro: {
    fontSize: 15,
    color: '#333',
    marginVertical: 2,
  },

  etiqueta: {
    fontWeight: 'bold',
    color: '#000',
  },
});