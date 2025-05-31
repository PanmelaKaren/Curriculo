// app/(tabs)/jogo.tsx
import React, { useState, useEffect } from 'react';
import { Alert, Button, TextInput, View, Text, FlatList, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';

type Attempt = {
  guess: string;
  bulls: number;
  cows: number;
};

function generateSecret(): string {
  let digits = '';
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(digit)) {
      digits += digit;
    }
  }
  return digits;
}

export default function JogoScreen() {
  const [secret, setSecret] = useState('');
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newSecret = generateSecret();
    setSecret(newSecret);
    setGuess('');
    setAttempts([]);
    setGameOver(false);
  };

  const calculateBullsAndCows = (guess: string): { bulls: number; cows: number } => {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        bulls++;
      } else if (secret.includes(guess[i])) {
        cows++;
      }
    }

    return { bulls, cows };
  };

  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      Alert.alert('Erro', 'Digite um número de 4 dígitos diferentes.');
      return;
    }

    const { bulls, cows } = calculateBullsAndCows(guess);
    const newAttempt = { guess, bulls, cows };
    const updatedAttempts = [newAttempt, ...attempts];
    setAttempts(updatedAttempts);
    setGuess('');

    if (bulls === 4) {
      setGameOver(true);
      Alert.alert('Parabéns!', 'Você acertou a senha!');
    } else if (updatedAttempts.length >= 10) {
      setGameOver(true);
      Alert.alert('Fim de jogo', `Você perdeu! A senha era: ${secret}`);
    }
  };

  const showSecret = () => {
    Alert.alert('Senha Secreta', `A senha era: ${secret}`);
  };

  return (
    <Layout title="Jogo Senha">
      <Text style={styles.title}>Tente adivinhar a senha de 4 dígitos únicos</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite sua tentativa"
        keyboardType="numeric"
        maxLength={4}
        value={guess}
        editable={!gameOver}
        onChangeText={setGuess}
      />

      <Button title="Enviar" onPress={handleGuess} disabled={gameOver} />
      <View style={{ marginTop: 8 }}>
        <Button title="Ver senha secreta" onPress={showSecret} />
      </View>

      {gameOver && (
        <View style={{ marginTop: 12 }}>
          <Button title="Jogar novamente" onPress={startNewGame} />
        </View>
      )}

      <FlatList
        style={{ marginTop: 20 }}
        data={attempts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text>
            {index + 1}. {item.guess} ➜ {item.bulls} Bulls, {item.cows} Cows
          </Text>
        )}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    fontSize: 18,
  },
});
