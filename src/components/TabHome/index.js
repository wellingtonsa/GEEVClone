import React, { Component } from 'react';
import { View } from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Requests from '../Requests';
import Donations from '../Donations';
// import { Container } from './styles';

export default class TabHome extends Component {
  render() {
    return (
            <ScrollableTabView
            tabBarUnderlineColor="#DC143C"
            tabBarUnderlineStyle={{backgroundColor: "#DC143C", height: 2}}
            tabBarBackgroundColor ="#FFF"
            tabBarActiveTextColor="#DC143C"
            tabBarInactiveTextStyle={{ fontWeight: 'bold'}}
            tabBarInactiveTextColor="#DDD"
            >
                <Donations tabLabel="Donations" {...this.props} />
                <Requests tabLabel="Requests" {...this.props} />
            </ScrollableTabView>

    )
  }
}
