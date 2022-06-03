import React, { useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';

import { DateTime } from '@components/DateTime';
import { WeatherData } from '@components/WeatherData';
import { Footer } from '@components/Footer';
import { WeatherDataOfTheWeek } from '@components/WeatherDataOfTheWeek';
import { Load } from '@components/Load';

import { DayPeriodContext } from '@contexts/DayPeriodContext';

import { API_KEY } from '../../utils/constants';
import { api } from '@services/api';

import { Props } from './types';

import {
  Container,
  UserContainer,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  WeatherDataList
} from './styles';

export const Home: React.FunctionComponent<Props> = ({ route }) => {
  const { userData } = route.params

  const [currentLocationData, setCurrentLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { dayPeriod, handleAddDayPeriod } = useContext(DayPeriodContext);

  async function fetchDataRegion(latitude: string | number, longitude: string | number) {
    if (latitude && longitude) {
      try {
        const { data } = await api.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
        setCurrentLocationData(data)
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  }

  async function requestUserPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      let LATITUDE_IN_VICOSA = "-20.7546";
      let LONGITUDE_IN_VICOSA = "-42.8825";
      fetchDataRegion(LATITUDE_IN_VICOSA, LONGITUDE_IN_VICOSA);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    fetchDataRegion(location.coords.latitude, location.coords.longitude);
  };

  function requestTimeOfDay() {
    const time = new Date();
    const hour = time.getHours();
    if (hour > 18) {
      handleAddDayPeriod(true);
    } else {
      handleAddDayPeriod(false);
    }
  }

  function renderProducts(daily: object) {
    return (
      <WeatherDataOfTheWeek weatherDaily={daily} />
    )
  }

  useEffect(() => {
    requestUserPermission();
    requestTimeOfDay();
  }, []);

  return (
    <Container dayPeriod={dayPeriod}>
      <UserContainer>
        <UserInfo>
          <Photo source={{ uri: `${userData.avatar_url}` }} />
          <User>
            <UserGreeting>Olá, </UserGreeting>
            <UserName>{userData.login}</UserName>
          </User>
        </UserInfo>
      </UserContainer>
      <DateTime dayPeriod={dayPeriod} locationData={currentLocationData} />
      <WeatherData locationData={currentLocationData} />
      {
        loading
          ? <Load size="large" />
          : <WeatherDataList
            dayPeriod={dayPeriod}
            data={currentLocationData.daily}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.dt}
            renderItem={renderProducts}
          />
      }
      <Footer />
    </Container>
  );
}