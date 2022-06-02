import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 8px;
  padding: 0 5px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.4)',
})`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(15)}px;
  border-radius: 8px;
  padding: 0px 10px;
`;