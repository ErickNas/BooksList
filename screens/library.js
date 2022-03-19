import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

import FlatComponent from './components/FlatComponent';

const Library = () => {
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/livros')
      .then(req => {
        setBooks(req.data)
      })
      .catch(erro => console.log(erro));
  }, [route.params?.res, route.params?.req]);

  return (
    <View style={styles.container}>
      
        <FlatList
          data={books}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <FlatComponent data={item}/>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
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
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    marginVertical: 5,
    width: '90%',
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Library;
