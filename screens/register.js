import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';


const Register = () => {
    const navigation = useNavigation();
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [kind, setKind] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const saveBook = () => {
        axios.post('http://10.0.2.2:3000/livros', {
            title,
            kind,
            description,
            image
        })
         .then((req) => {
             const temp = [...books, req.data];
             setBooks(temp);
             alert('Salvo com sucesso!');
             navigation.navigate('Library', {req});
         })
         .catch((err) => alert('Erro ao salvar: ' + err));
    };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={txt => setTitle(txt)}
        style={styles.input}
        placeholder="Titulo"
      />
      <TextInput
        value={kind}
        onChangeText={txt => setKind(txt)}
        style={styles.input}
        placeholder="Genêro"
      />
      <TextInput
        multiline
        numberOfLines={10}
        value={description}
        onChangeText={txt => setDescription(txt)}
        style={styles.input2}
        placeholder="Sinopse"
      />
      <TextInput
        value={image}
        onChangeText={txt => setImage(txt)}
        style={styles.input}
        placeholder="Url da Imagem. ex: https://"
      />
      <TouchableOpacity style={styles.button} onPress={saveBook}>
        <Text style={styles.textButton}>Cadastrar Livro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cacaca',
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    height: 45,
    fontSize: 16,
    width: '100%',
  },
  input2: {
    borderWidth: 1,
    marginVertical: 10,
    height: 150,
    width: '100%',
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 30,
    width: 180,
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Register;
