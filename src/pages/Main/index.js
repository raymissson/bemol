import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, SafeAreaView} from './styles';

export default function Main(){
  return (
    <SafeAreaView>
      <Container>
      <Header/>
      <Content>
        <Menu />
          <Card
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 10.000,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>Tranferência de R$ 20,00 recebida de Raymison Maklouf hoje às 06:10h</Annotation>
            </CardFooter>
          </Card>

      </Content>
      <Tabs/>
    </Container>
    </SafeAreaView>
  );
}
