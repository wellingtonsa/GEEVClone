import React, { Component } from 'react';
import { ScrollView, FlatList  } from 'react-native';
import Item from '../Item';
import Location from '../Location';

import { Container } from './styles';

export default class Donations extends Component {


    state ={
      objects:[
        {
          id: 0
        },
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
      ]
    }

    constructor(props){
        super(props);
    }

  render() {
    return (
      <Container>
        <Location/>
        <FlatList
        data={this.state.objects}
        keyExtractor={object => object.id.toString()}
        renderItem={() => <Item/>}
        numColumns={2}
      /> 
      </Container>

    );
  }
}
