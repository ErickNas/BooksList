import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  const deleteBook = id => {
    axios
      .delete(`http://10.0.2.2:3000/livros/${id}`)
      .then((req) => {
        alert('Deletado com sucesso!');
        navigation.navigate('Library', {req});
      })
      .catch(err => alert('Erro ao deletar: ' + err));
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: data.image}}
        style={styles.images}
      />

      <View>
        <Text style={styles.title}>{data.title}</Text>
        <Text>Gênero: {data.kind}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Book', {book: data})}>
          <Text style={{color: 'black', textDecorationLine: 'underline'}}>
            Infos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteBook(data.id)}>
          <Text style={{color: 'red', textDecorationLine: 'underline'}}>
            Apagar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    width: '98%',
  },
  images: {
    width: 100,
    height: 100,
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
  },
});

export default FlatComponent;
