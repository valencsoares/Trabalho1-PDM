import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, FlatList, TextInput, View, ScrollView, Button } from 'react-native';
import { useState } from 'react';

function Header(){
  return(
    <Text style={styles.navbar}> Jifena 2024 </Text>
  )
}
  
function Footer(){
  return(
    <Text style={styles.footer}>footer</Text>
  )
}

export default function App() {
  const [esporte, setEsporte] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked2, setIsClicked2] = useState(true);
  const [placar1, setPlacar1] = useState(0);
  const [placar2, setPlacar2] = useState(0);
  function botao1() {
    setIsClicked(false);
    setIsClicked2(true);
  }

  function botao2() {
    setIsClicked(true);
    setIsClicked2(false);
  }
  const time = isClicked ? time2 : time1
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      style={styles.container}>
      <Header />
      <Footer />
      <Text style={{ marginTop: 20 }}></Text>

      <Text style={styles.textTitulo}>Marcador de Pontos do JIFENA 2024</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o esporte"
        onChangeText={(e) => setEsporte(e)}
        defaultValue={esporte}
      />
      <Text style={styles.text}>Nome do time 1</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o nome do time 1 aqui!"
        onChangeText={(t1) => setTime1(t1)}
        defaultValue={time1}
      />
      <Text style={styles.text}>Nome do time 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o nome do time 2 aqui!"
        onChangeText={(t2) => setTime2(t2)}
        defaultValue={time2}
      />

      <Text style={styles.text}>Placar - {esporte}</Text>

      <View style={styles.line}>
        <Text style={styles.text}>{time1}: </Text>
        <Text>{placar1}     </Text>
        <Text style={styles.text}>{time2}: </Text>
        <Text>{placar2}</Text>
      </View>

      <Text style={{ marginTop: 20, color: '#fff' }}> Selecione o time do jogador: </Text>
      <View style={styles.line}>
      <Button
          onPress={() => { botao1() }}
          title={isClicked ? time1 : time1}
        />
        <Button
          onPress={() => { botao2() }}
          title={isClicked2 ? time2 : time2}
        />
      </View>

      <Text style={styles.text}>Cadastre o jogador do time:</Text>

      <TextInput
        style={styles.input}
        placeholder="Informe o nome do jogador"
        onChangeText={(j) => setJogador(j)}
        defaultValue={jogador}
      />
      <TextInput
        style={styles.input}
        placeholder="Informe o número da camiseta"
        onChangeText={(c) => setCamiseta(c)}
        defaultValue={camiseta}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
  },
  textTitulo: {
    backgroundColor: 'grey',
    fontWeight: 'bold',
    color: 'white',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: 250,
    borderColor: 'white',
  },
  footer: {
    backgroundColor: 'white',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 0,
    position: 'fixed',
    color: 'white',
  },
  navbar: {
    backgroundColor: '#fff',
    top: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    textAlign: 'center',
  },
});
