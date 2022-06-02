import { KeyboardTypeOptions, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
    placeholder?: string,
    value: string,
    onChangeText: (text: string) => void,
    secureTextEntry?: boolean,
    autoCorrect: boolean,
    autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined,
    keyboardType?: KeyboardTypeOptions
}