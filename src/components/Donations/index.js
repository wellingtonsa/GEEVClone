import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Item from '../Item';
import Location from '../Location';
 import { Container } from './styles';

export default class Donations extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <Container>
        <Location/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </Container>

    );
  }
}
