import React from 'react';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Bemol_logo.png';

export default function Header(){
    return (
        <Container>
            <Top>
                <Logo source={logo} />
            </Top>
            <Title>Raymison</Title>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}