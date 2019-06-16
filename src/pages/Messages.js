import React, { Component } from 'react';
import TabMessages from '../components/TabMessages';
import Header from '../components/Header';
import { View } from 'react-native';

export default class Messages extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header name="Messages"/>
        <TabMessages/>
      </View>
      );
  }
}
