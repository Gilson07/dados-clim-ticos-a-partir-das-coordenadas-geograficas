import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  dayPeriod: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme, dayPeriod }) => (dayPeriod ? theme.colors.purple : theme.colors.weakBlue)};
`;

export const UserContainer = styled.View`
  padding: 20px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 40px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;


export const WeatherDatatList = styled(FlatList as new () => FlatList).attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 125,
    marginHorizontal: 14,
  },
  showsVerticalScrollIndicator: false,
})``;