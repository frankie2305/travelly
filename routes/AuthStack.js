import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Signup, Login } from '../screens';

const Stack = createStackNavigator();

export default AuthStack = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name='Signup' component={Signup}></Stack.Screen>
		<Stack.Screen name='Login' component={Login}></Stack.Screen>
	</Stack.Navigator>
);
