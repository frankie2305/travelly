import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Travels } from '../screens';
import { Header } from '../components';
import { colors } from '../constants';

const Stack = createStackNavigator();

export default TravelsStack = ({ navigation }) => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: colors.blue },
		}}>
		<Stack.Screen
			name='Travels'
			component={Travels}
			options={{
				headerTitle: () => (
					<Header
						navigation={navigation}
						icon='luggage'
						title='Travels'
					/>
				),
			}}
		/>
	</Stack.Navigator>
);
