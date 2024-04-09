import { StyleSheet, Image, Text, Button, TextInput, View, ScrollView, SafeAreaView , TouchableOpacity } from 'react-native';
import { useState } from 'react';

function Header() {
  return (
    <SafeAreaView  style={styles.navbar}>
      <Text style={{color: 'white', textAlign: 'center'}}> Marcador de Pontos do JIFENA 2024! </Text>
    </SafeAreaView >
  )
}
  
export default function App() {
  const [esporte, setEsporte] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [jogador, setJogador] = useState('');
  const [camiseta, setCamiseta] = useState('');
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked2, setIsClicked2] = useState(true);
  const [botaoJ, setBotaoJ] = useState(true);
  const [placar1, setPlacar1] = useState(0);
  const [placar2, setPlacar2] = useState(0);
  const [lista, setLista] = useState([]);
  const [ponto, setPonto] = useState(0);
  const [aviso, setAviso] = useState('');

  function botao1() {
    setIsClicked(false);
    setIsClicked2(true);
  }

  function botao2() {
    setIsClicked(true);
    setIsClicked2(false);
  }

  const time = isClicked ? time2 : time1
  function botao3() {
    if (jogador != '' && camiseta !='' ){
      setBotaoJ(false);
      setLista([...lista, { jogador: jogador, camiseta: camiseta, time: time, ponto: ponto }]);
      console.log(lista);
      setPonto(pontoAnterior => ({ ...pontoAnterior, [jogador]: 0 }));
      setAviso('')
    } else if (jogador == '' && camiseta == '' ) {
      setAviso('Informe o jogador e o nº da camiseta.')
    } else if (jogador != '' && camiseta == '' ) {
      setAviso('Informe o nº da camiseta.')
    } else {
      setAviso('Informe o jogador.')
    }
  }

  function placar(index, jogador) {
    const item = lista[index]
    if (item.time == time1){
      setPlacar1(p => p+1)
    } else (
      setPlacar2(p => p+1)
    ); 
    if (index >= 0) {
      setPonto(pontoAnterior => ({ ...pontoAnterior, [jogador]: pontoAnterior[jogador] + 1 }));
      console.log(ponto)
      console.log(item.jogador);
      console.log(item.time);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>

        <Text style={{fontWeight: 'bold', marginTop: '40px', textAlign: 'center' }}>Informe os dados necessários abaixo</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o esporte"
          onChangeText={(e) => setEsporte(e)}
          defaultValue={esporte}
        />
        <Text>Nome do time 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o nome do time"
          onChangeText={(t1) => setTime1(t1)}
          defaultValue={time1}
        />
        <Text>Nome do time 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o nome do time"
          onChangeText={(t2) => setTime2(t2)}
          defaultValue={time2}
        />

        <Text style={{textAlign: 'center', marginTop: 10}}>Placar - {esporte}</Text>

        <View style={styles.line}>
          <Text>{time1}: {placar1} </Text>
          <Text>{time2}: {placar2} </Text>
        </View>

        <Text style={{marginTop: 15}}>Selecione o time do jogador: </Text>
        <View style={{...styles.line, marginTop: 10}}>
          <Button
            onPress={() => { botao1() }}
            title={isClicked ? time1 : time1}
          />
          <Button
            onPress={() => { botao2() }}
            title={isClicked2 ? time2 : time2}
          />
        </View>

        <Text style={{ marginTop: 10, color: 'black' }}>Cadastre o jogador do time:</Text>

        <TextInput
          style={{...styles.input, marginTop: 10}}
          placeholder="Informe o nome do jogador"
          onChangeText={(j) => setJogador(j)}
          defaultValue={jogador}
        />
        <TextInput
          style={{...styles.input, marginTop: 2}}
          placeholder="Informe o número da camiseta"
          onChangeText={(c) => setCamiseta(c)}
          defaultValue={camiseta}
        />
        <TouchableOpacity
          onPress={() => { botao3() }}
          onChangeText={(b) => setBotaoJ(b)}
          defaultValue={botaoJ}>
          <Text style={{ color: "#4994EC", textAlign: 'center', marginTop: 5 }}>Adicionar jogador</Text>
        </TouchableOpacity>

        <View>
          <Text>{aviso}</Text>
          {lista.map((item, index) => (
            <View key={index} style={styles.line}>
              <Text>{item.jogador} - {item.time} - #{item.camiseta}</Text>
              <Text>Pontos: {ponto[item.jogador]}</Text>
              <TouchableOpacity onPress={() => placar(index, item.jogador)}>
                <Text style={{color: '#4994EC'}}>+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '20em',
    borderColor: 'black',
  },
  navbar: {
    backgroundColor: 'black',
    top: 0,
    position: 'fixed',
    width: '100%',
    height: '30px',
    zIndex: 1,
    justifyContent: 'center', 
  },
});
