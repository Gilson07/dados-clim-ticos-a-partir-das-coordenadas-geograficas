import styled from 'styled-components/native';
import { Snackbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 30px 15px 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const FormContainer = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const WelcomeText = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  align-self: center;
  margin: 0 0 20px 0;
`;

export const InputContainer = styled.View``;

export const AccessButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  height: 60px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const AlertSnackBar = styled(Snackbar)`
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const SnackBarText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;