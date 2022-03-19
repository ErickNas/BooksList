import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const Alteration = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const route = useRoute();
  const navigation = useNavigation();
  const book = route.params.book;

  useEffect(() => {
    setTitle(book.title);
    setImage(book.image);
    setDescription(book.description);
    setKind(book.kind);
    setId(book.id);
  }, []);

  const editBook = () => {
    axios
      .patch(`http://10.0.2.2:3000/livros/${id}`, {
        title,
        kind,
        image,
        description,
      })
      .then(res => {
        alert('Livro alterado com sucesso');
        navigation.navigate('Library', {res});
      })
      .catch(err => alert('Erro: ' + err));
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
      <TouchableOpacity style={styles.button} onPress={editBook}>
        <Text style={styles.textButton}>Salvar</Text>
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

export default Alteration;
