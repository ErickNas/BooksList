import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const backgroundImage = {uri: 'https://cdn.pixabay.com/photo/2013/07/12/15/07/book-149474_960_720.png'};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} resizeMode="cover" source={backgroundImage}>
        <Text style={styles.general}>Bem vindo ao Read.Me</Text>
        <Text style={styles.general2}>Sua Lista de livros a ler.</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Library')}>
            <Text style={styles.textButton}>Meus Livros</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    width: 180,
    marginTop: '15%',
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  general: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '25%',
    textAlign: 'center',
  },
  general2: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'center',
  },
});

export default Home;
