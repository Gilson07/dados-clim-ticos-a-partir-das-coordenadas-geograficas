import React from 'react';
jest.useFakeTimers()
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { render } from '@testing-library/react-native';

import theme from '@global/styles';

import { SignIn } from './index';

describe('SignIn Screen', () => {

    const component = (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <SignIn />
            </NavigationContainer>
        </ThemeProvider>
    );

    it('Should have placeholder correctly in user GitHub input', () => {

        const { getByPlaceholderText } = render(component);

        const inputEmail = getByPlaceholderText('GitHub');

        expect(inputEmail).toBeTruthy();

    });

    it('Should exist title correctly', () => {

        const { getByTestId } = render(component);

        const textTitle = getByTestId('access_gitHub');

        expect(textTitle.props.children).toContain('Acessar com o seu GitHub');

    });

    it('Should exist title of the button correctly', () => {

        const { getByTestId } = render(component);

        const accessButton = getByTestId('access_button');

        expect(accessButton.props.children).toContain('Acessar');

    });

});