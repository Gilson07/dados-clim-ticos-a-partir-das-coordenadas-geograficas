import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { SignIn } from '@screens/Authentication/SignIn';

import { StackParamsList } from './types';

const defaultNavigationOptions = {
    headerShown: false
}

const Stack = createNativeStackNavigator<StackParamsList>();

export function AppRoutes() {

    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={defaultNavigationOptions}
        >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}