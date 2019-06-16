import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ScrollableTabView  from 'react-native-scrollable-tab-view';

import AdoptionsMessages from '../AdoptionsMessages';
import DonationsMessages from '../DonationsMessages';
// import { Container } from './styles';

export default class TabMessages extends Component {
  render() {
    return (
            <ScrollableTabView
            tabBarUnderlineColor="#DC143C"
            tabBarUnderlineStyle={{backgroundColor: "#DC143C", height: 2}}
            tabBarBackgroundColor ="#FFF"
            tabBarActiveTextColor="#DC143C"
            tabBarInactiveTextStyle={{ fontWeight: 'bold'}}
            tabBarInactiveTextColor="#DDD">
                <DonationsMessages tabLabel="Donations" {...this.props} />
                <AdoptionsMessages tabLabel="Adoptions" {...this.props} />
            </ScrollableTabView>

    )
  }
}
