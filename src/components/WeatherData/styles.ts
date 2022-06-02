import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.matte};
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryItem = styled.View``;

export const DescriptionLeft = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.weakBlue};
  text-align: left;
`;

export const ValueLeft = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
`;

export const DescriptionRight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.weakBlue};
  text-align: right;
`;

export const ValueRight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
`;