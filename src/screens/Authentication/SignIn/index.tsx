import React, { useState } from 'react';
import { Platform } from 'react-native';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamsList } from '@routes/types';

type homeScreenProp = NativeStackNavigationProp<StackParamsList, 'SignIn'>;

import { Input } from '../../../components/TextInput';
import { Load } from '@components/Load';

import {
    Container,
    FormContainer,
    WelcomeText,
    InputContainer,
    AccessButton,
    ButtonText,
    AlertSnackBar,
    SnackBarText
} from './styles';

export const SignIn: React.FunctionComponent = () => {
    const navigation = useNavigation<homeScreenProp>();

    const [github, setGitHub] = useState('');
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [loading, setLoading] = useState(false);

    function onToggleSnackBar() {
        setSnackBarVisible(!snackBarVisible)
    }

    const renderSnackbar = (message: string) => {
        setSnackBarMessage(message);
        onToggleSnackBar();
    }

    const renderFlashMessage = (message: string, type: any) => {
        showMessage({
            message: type == 'danger' ? "Acesso negado" : "Acesso permitido",
            description: message,
            type: type,
            titleStyle: { textAlign: 'center' },
            textStyle: { textAlign: 'center' }
        });
    }

    const validateLogin = () => {
        setLoading(true)
        if (!github) {
            renderSnackbar('Favor preencher o seu GitHub')
            setLoading(false);
        } else {
            handleLogin(github);
        }
    }

    const handleLogin = async (name: string) => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${name}`
            );
            const responseJson = await response.json();
            if (!responseJson.message) {
                navigation.navigate('Home', { userData: responseJson });
            } else {
                renderSnackbar('GitHub inválido!')
            }
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <FlashMessage position="top" />
            <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <WelcomeText testID='access_gitHub'>
                    Acessar com o seu GitHub
                </WelcomeText>
                <InputContainer>
                    <Input
                        placeholder="GitHub"
                        value={github}
                        onChangeText={text => setGitHub(text)}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                    />
                    <AccessButton onPress={validateLogin}>
                        {
                            loading ? (
                                <Load size="small" />
                            ) : (
                                <ButtonText testID='access_button'>Acessar</ButtonText>
                            )
                        }
                    </AccessButton>
                </InputContainer>
            </FormContainer>
            <AlertSnackBar
                visible={snackBarVisible}
                onDismiss={onToggleSnackBar}
                action={{
                    label: 'Fechar',
                    onPress: onToggleSnackBar,
                }}
            >
                <SnackBarText>{snackBarMessage}</SnackBarText>
            </AlertSnackBar >
        </Container>
    );
}