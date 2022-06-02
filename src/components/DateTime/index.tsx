import React, { useState, useEffect } from 'react';

import { daysOfTheWeek, monthsOfTheYear } from '@utils/daysAndMonths';

import { DateTimeProps } from './types';

import {
    Container,
    DateTimeContainer,
    HoursContainer,
    Icon,
    HoursText,
    DateText,
    CityNameText,
} from './styles';

export const DateTime: React.FunctionComponent<DateTimeProps> = ({ locationData, dayPeriod }) => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    function renderNameOfTheCity() {
        var separatesStateAndCity = locationData.timezone.split("/", 2);
        return separatesStateAndCity[1].replace('_', ' ');
    }

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const minutes = time.getMinutes();

            setCurrentTime((hour) + ':' + (minutes < 10 ? '0' + minutes : minutes))
            setCurrentDate(daysOfTheWeek[day] + ', ' + date + ' ' + monthsOfTheYear[month])

        }, 1000);
    }, [])

    return (
        locationData &&
        <Container>
            <CityNameText>{renderNameOfTheCity()}</CityNameText>
            <DateTimeContainer>
                <HoursContainer>
                    <HoursText>{currentTime}</HoursText>
                    <Icon name={`${dayPeriod ? 'moon' : 'sunny'}`} dayPeriod />
                </HoursContainer>
                <DateText>{currentDate}</DateText>
            </DateTimeContainer>
        </Container>
    );
}