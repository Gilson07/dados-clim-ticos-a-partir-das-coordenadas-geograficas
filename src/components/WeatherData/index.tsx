import React from 'react';

// Import Components
import { DateTimeProps } from '@components/DateTime';

// Styles
import {
    Container,
    Category,
    CategoryItem,
    DescriptionLeft,
    ValueLeft,
    DescriptionRight,
    ValueRight,
} from './styles';

export const WeatherData: React.FunctionComponent<DateTimeProps> = ({ locationData = null }) => {
    return (
        locationData &&
        <Container>
            <Category>
                <CategoryItem>
                    <DescriptionLeft>Temperatura</DescriptionLeft>
                    <ValueLeft>{parseInt(locationData.current.temp)}°C</ValueLeft>
                </CategoryItem>
                <CategoryItem>
                    <DescriptionRight>Pressão</DescriptionRight>
                    <ValueRight>{locationData.current.pressure}mbar</ValueRight>
                </CategoryItem>
            </Category>
            <Category>
                <CategoryItem>
                    <DescriptionLeft>Umidade</DescriptionLeft>
                    <ValueLeft>{locationData.current.humidity}%</ValueLeft>
                </CategoryItem>
                <CategoryItem>
                    <DescriptionRight>Índice UV</DescriptionRight>
                    <ValueRight>{locationData.current.uvi}</ValueRight>
                </CategoryItem>
            </Category>
            <Category>
                <CategoryItem>
                    <DescriptionLeft>Nuvens</DescriptionLeft>
                    <ValueLeft>{locationData.current.clouds}</ValueLeft>
                </CategoryItem>
                <CategoryItem>
                    <DescriptionRight>Velocidade do vento</DescriptionRight>
                    <ValueRight>{locationData.current.wind_speed}km/h</ValueRight>
                </CategoryItem>
            </Category>
            <Category>
                <CategoryItem>
                    <DescriptionLeft>Latitude</DescriptionLeft>
                    <ValueLeft>{locationData.lat}</ValueLeft>
                </CategoryItem>
                <CategoryItem>
                    <DescriptionRight>Longitude</DescriptionRight>
                    <ValueRight>{locationData.lon}</ValueRight>
                </CategoryItem>
            </Category>
        </Container>
    );
}