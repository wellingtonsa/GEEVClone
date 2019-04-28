import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Status, Booked, BookedText, Donation, Details, Info, Title, Location, Distance, LocationText, DistanceText } from './styles';
import Icon from 'react-native-vector-icons/Entypo';
export default class Item extends Component {
  render() {
    return (
        <Container>
          <Image 
            source={require('../../../assets/images/Desert.jpg')} 
            style={{ display: "flex", resizeMode: 'cover', height: '70%', width: '100%', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} /> 
          <Details>
            <Status>
              <Donation>
                 <Icon name={'home'} color={'#FFF'} size={10}/> 
              </Donation>
              {/* <Booked>
                <BookedText>BOOKED</BookedText>
              </Booked> */}
            </Status>
            
            <Title>Aspirador de pó 180W</Title>
            <Info>
              <Location>
                <Icon name={'location-pin'} color={'#DC143C'} size={12}/>
                <LocationText>55.3km</LocationText>
              </Location> 
              <Distance>
                <Icon name={'clock'} color={'#DC143C'} size={12}/>
                <DistanceText>8hr</DistanceText>
              </Distance>
            </Info>
          </Details>
        </Container>
    );
  }
}
