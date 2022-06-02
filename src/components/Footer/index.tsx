import React from 'react';
import { Linking } from 'react-native';

// Styles
import {
    Container,
    Category,
    Description,
    Name
} from './styles';

export const Footer: React.FunctionComponent = () => {

    const requestGitHub = () => {
        Linking.openURL('https://github.com/Gilson07');
    }

    const requestOpenWeather = () => {
        Linking.openURL('https://openweathermap.org/api');
    }

    return (
        <Container>
            <Category onPress={requestGitHub}>
                <Description>Desenvolvido por</Description>
                <Name>Gilson</Name>
            </Category>
            <Category onPress={requestOpenWeather}>
                <Description>Dados fornecidos parcialnente por</Description>
                <Name>Open Weather</Name>
            </Category>
        </Container>
    );
}