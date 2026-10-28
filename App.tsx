import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image 
      source={require('./assets/favicon.png')}
      style={styles.imagem}
      />

      <Text style={styles.Nome}>Domingos Padre</Text>
      <Text style={styles.texto}>Programador & Desenvolvidor React Native</Text>
      <StatusBar style="light"/>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // COR DO FUNDO 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  imagem: {
    width: 110,
    height: 110,
    borderRadius: 55, // Torna a imagem circular
    marginBottom: 20,
  },
  Nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38BDF8', // Cor do texto do nome
    marginBottom: 8,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#94A3B8', // Cor do segundo texto
    textAlign: 'center',
  },
});

