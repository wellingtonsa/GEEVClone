import React, { Component } from 'react';
import Header from '../components/Header';
import { View, Text  } from 'react-native';

// import styles from './styles';

export default class Create extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header name="New" shadow={true}/>
      </View>
      );
  }
}
