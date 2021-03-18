import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='SignUp' component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

