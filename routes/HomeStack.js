import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';
import { Header } from '../components';
import { colors } from '../constants';

const Stack = createStackNavigator();

export default HomeStack = ({ navigation }) => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: colors.blue },
		}}>
		<Stack.Screen
			name='Home'
			component={Home}
			options={{
				headerTitle: () => (
					<Header navigation={navigation} icon='home' title='Home' />
				),
			}}
		/>
	</Stack.Navigator>
);
