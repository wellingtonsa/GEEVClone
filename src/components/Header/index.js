import React from 'react';

import { View } from 'react-native';

import { Container, Title } from './styles';

const Header = ({ name, shadow = false }) => (
    <Container shadow={shadow}>
        <Title>{name}</Title>
    </Container>
);

export default Header;
