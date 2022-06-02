import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { IconProps } from './types';

export const Container = styled.View`
  margin: 20px;
`;

export const DateTimeContainer = styled.View`
  align-items: center;
`;

export const HoursContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons) <IconProps>`
  color:  ${({ theme, dayPeriod }) => (dayPeriod ? theme.colors.white : theme.colors.secondary)};
  font-size: ${RFValue(24)}px;
  margin: 0 0 0 5px;
`;

export const HoursText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.white};
  align-self: center;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CityNameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;