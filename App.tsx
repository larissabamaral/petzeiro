import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Saúde Pet 🐾</Text>

      <text style={styles.descricao}>
        Gerencie a saúde do seu melhor amigo!
      </text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2D6A4F',
  },
  descricao: {
    fontSize: 16,
    color: '#555555',
    marginTop: 12,
  },
});
