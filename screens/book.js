import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Book = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const book = route.params.book;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: book.image}} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.texts}>Estilo: {book.kind}</Text>
      <Text style={styles.texts}>Sinopse: {book.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Alteration', {book: book})}>
        <Text style={styles.textButton}>Alterar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cacaca',
    paddingTop: 20,
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
  image: {
    width: 150,
    height: 200,
  },
  texts: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Book;
