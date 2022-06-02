import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin: 20px;
  padding: 0 20px;
  border-radius: 20px;
  align-self: center;
  position: absolute;
  bottom: 0;
`;

export const Category = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.white};
  margin: 5px 5px 5px 0;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.white};
`;