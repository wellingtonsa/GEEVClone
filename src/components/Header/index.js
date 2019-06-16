import React from 'react';

import { View } from 'react-native';

import { Container, Title } from './styles';

const Header = (props) => (
    <Container>
        <Title>{props.name}</Title>
    </Container>
);

export default Header;
