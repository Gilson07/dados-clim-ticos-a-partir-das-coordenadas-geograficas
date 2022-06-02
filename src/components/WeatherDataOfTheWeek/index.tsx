import React from 'react';

import { daysOfTheWeek } from '@utils/daysAndMonths';

import { Props } from './types';

// Styles
import {
    Container,
    DayText,
    TempContainer,
    Temp,
    Description,
    Value
} from './styles';

export const WeatherDataOfTheWeek: React.FunctionComponent<Props> = ({ weatherDaily, dayPeriod }) => {
    return (
        <Container dayPeriod={dayPeriod}>
            <DayText>{daysOfTheWeek[weatherDaily.index]}</DayText>
            <TempContainer>
                <Temp>
                    <Description>Min: </Description>
                    <Value>{parseInt(weatherDaily.item.temp.min)}°C</Value>
                </Temp>
                <Temp>
                    <Description>Máx: </Description>
                    <Value>{parseInt(weatherDaily.item.temp.max)}°C</Value>
                </Temp>
            </TempContainer>
        </Container>
    );
}