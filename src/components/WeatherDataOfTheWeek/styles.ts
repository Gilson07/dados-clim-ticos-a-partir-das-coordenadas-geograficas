import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  dayPeriod: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, dayPeriod }) => (dayPeriod ? theme.colors.black : theme.colors.matte)};
  width: 140px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const DayText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.weakBlue};
  text-align: left;
`;

export const TempContainer = styled.View``;

export const Temp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;