import React from 'react';

import { Props } from './types';

import {
    Container,
} from './styles';

export const Load: React.FunctionComponent<Props> = ({ size }) => {
    return (
        <Container
            size={size}
        />
    )
}