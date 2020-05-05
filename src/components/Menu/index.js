import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';

export default function Menu({ translateY }){
    return (
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
            })
          }}
        >
            <Code>
                <QRCode 
                    value="https://m.bemol.com.br/"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#0092d4"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Meu perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Config. cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Config. app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}