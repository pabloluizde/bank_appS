import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/home';
import Details from '../pages/details';
import CreditCard from '../pages/credit_card';
import Convert from '../pages/convert';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="CreditCard" component={CreditCard} />
                <Stack.Screen name="Convert" component={Convert} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;