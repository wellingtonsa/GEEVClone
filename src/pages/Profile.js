import React, { Component } from 'react';
import Header from '../components/Header';
import { View, Text } from 'react-native';

// import styles from './styles';

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header name="Wellington A." shadow={true}/>
      </View>
      );
  }
}
