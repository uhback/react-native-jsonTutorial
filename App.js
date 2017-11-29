/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MovieListDemo from './src/Components/MovieListDemo'
import Icon from 'react-native-vector-icons/Entypo';
import styles from './src/styles/mainStyle';
import Login from './src/Components/Login'

class HomeScreen extends Component {
  static navigationOptions = ({ navigate, navigation }) => ({
    title: 'Movie Trend',
    headerStyle: { 
      backgroundColor: '#003171'
    },
    headerTitleStyle: { 
      color: '#EEEEEE',
      alignSelf: 'center',
      marginRight: 10,
      fontSize: 18
    },
    headerRight: 
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="login" size={18} color='#EEEEEE' />
        </TouchableOpacity>
      </View>,
    headerLeft: 
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="menu" size={20} color='#EEEEEE' />
        </TouchableOpacity>
      </View>
  });

  render() {
    return <MovieListDemo />
  }
}

export default class App extends Component {
  render() {
    return (
      <MovieTrend />
    );
  }
}

const MovieTrend = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
});

