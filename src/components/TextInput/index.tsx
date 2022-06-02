import * as React from 'react';

import { InputProps } from './types';

import {
    Container,
    TextInput
} from './styles';

export const Input: React.FunctionComponent<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    autoCorrect,
    autoCapitalize,
    keyboardType,
}) => {
    return (
        <Container>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
            />
        </Container>
    );
}