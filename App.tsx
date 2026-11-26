
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  function entrar() {
    if (!email.trim() || !senha) {
      setErro('Preencha seu e-mail e sua senha.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErro('Informe um e-mail válido.');
      return;
    }

    setErro('');

    Alert.alert(
      'Petzeiro',
      'O login será conectado ao banco de dados em breve.'
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar style="dark" />

        <View style={styles.formulario}>

          <Image
            source={require('./assets/logotipo.png')}
            style={styles.logoHorizontal}
            resizeMode="contain"
          />

          <Text style={styles.slogan}>
            Cuidando de quem faz parte da família.
          </Text>

          {/* Cabeçalho */}
          <Text style={styles.titulo}>Bem-vindo de volta!</Text>

          <Text style={styles.subtitulo}>
            Entre para acompanhar a saúde dos seus pets.
          </Text>

          {/* Campo de e-mail */}
          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            placeholderTextColor="#999999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />

          {/* Campo de senha */}
          <Text style={styles.label}>Senha</Text>

          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.senhaInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#999999"
              secureTextEntry={!mostrarSenha}
              autoComplete="current-password"
              value={senha}
              onChangeText={setSenha}
            />

            <Pressable
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Text style={styles.mostrarSenha}>
                {mostrarSenha ? 'Ocultar' : 'Mostrar'}
              </Text>
            </Pressable>
          </View>

          {/* Mensagem de validação */}
          {erro !== '' && (
            <Text style={styles.erro}>{erro}</Text>
          )}

          {/* Recuperação de senha */}
          <Pressable
            onPress={() =>
              Alert.alert(
                'Recuperar senha',
                'Funcionalidade em desenvolvimento.'
              )
            }
          >
            <Text style={styles.esqueceuSenha}>
              Esqueceu sua senha?
            </Text>
          </Pressable>

          {/* Botão entrar */}
          <Pressable
            style={styles.botaoEntrar}
            onPress={entrar}
          >
            <Text style={styles.textoBotao}>
              Entrar
            </Text>
          </Pressable>

          {/* Cadastro */}
          <View style={styles.rodape}>
            <Text style={styles.textoRodape}>
              Ainda não tem conta?
            </Text>

            <Pressable
              onPress={() =>
                Alert.alert(
                  'Cadastro',
                  'A tela de cadastro será desenvolvida na próxima etapa.'
                )
              }
            >
              <Text style={styles.linkCadastro}>
                Cadastre-se
              </Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F4F8F5',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  formulario: {
    width: '100%',
    maxWidth: 420,
  },

  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E2F0E7',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  logo: {
    fontSize: 38,
  },

  nomeApp: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#25694F',
    textAlign: 'center',
  },

  slogan: {
    fontSize: 14,
    color: '#6B8073',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#253D31',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: '#708076',
    marginBottom: 28,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#344D3E',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1DDD5',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#253D31',
    marginBottom: 20,
  },

  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1DDD5',
    borderRadius: 12,
  },

  senhaInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#253D31',
  },

  mostrarSenha: {
    color: '#25694F',
    fontWeight: '600',
    paddingHorizontal: 14,
  },

  erro: {
    color: '#B42318',
    fontSize: 13,
    marginTop: 10,
  },

  esqueceuSenha: {
    color: '#25694F',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    marginTop: 14,
    marginBottom: 28,
  },

  botaoEntrar: {
    backgroundColor: '#25694F',
    borderRadius: 12,
    padding: 17,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    gap: 5,
  },

  textoRodape: {
    color: '#708076',
    fontSize: 14,
  },

  linkCadastro: {
    color: '#25694F',
    fontSize: 14,
    fontWeight: 'bold',
  },

  logoHorizontal: {
    width: 280,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
});
