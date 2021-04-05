import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TravelDetails, Travels } from '../screens';
import { Header } from '../components';
import { colors, styles } from '../constants';

const Stack = createStackNavigator();

export default TravelStack = ({ navigation }) => (
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
		<Stack.Screen
			name='TravelDetails'
			component={TravelDetails}
			options={{
				headerBackAllowFontScaling: true,
				headerTintColor: colors.white,
				headerTitleStyle: styles.label,
				title: 'Travel Details',
			}}
		/>
	</Stack.Navigator>
);
