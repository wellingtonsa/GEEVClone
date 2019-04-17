import React, { Component } from 'react';
import { Header, PremiumButton, MyBananasButton, SearchButton, MapButton, Group } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import styles from './styles';

export default class HomeHeader extends Component {
  render() {
    return (
    <Header>
      <Group>
        <PremiumButton/>
        <MyBananasButton>
        <AntDesign name={'search1'} size={20} color={'#000'} />
        </MyBananasButton>
      </Group>
      <Group>
        <SearchButton>
          <AntDesign name={'search1'} size={20} color={'#000'} />
        </SearchButton>
        <MapButton>
          <FontAwesome name={'map-o'} size={20} color={'#000'} />
        </MapButton>
      </Group>
    </Header>);
  }
}

