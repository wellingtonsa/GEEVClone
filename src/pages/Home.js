import React, { Component } from 'react';
import { View } from 'react-native';

import HomeHeader from '../components/HomeHeader';
import TabHome from '../components/TabHome';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <HomeHeader/>
        <TabHome/>
      </View>
      );
  }
}
