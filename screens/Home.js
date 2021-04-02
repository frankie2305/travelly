import React from 'react';
import { View } from 'react-native';
import { Category, Screen, Text } from '../components';
import { styles } from '../constants';

export default Home = () => (
	<Screen>
		<View style={[styles.row, { justifyContent: 'space-around' }]}>
			<Category
				color='red'
				icon='restaurant'
				label='Restaurants'
				onPress={() => console.log('Restaurants')}
			/>
			<Category
				color='green'
				icon='hotel'
				label='Hotels'
				onPress={() => console.log('Hotels')}
			/>
		</View>
		<View style={[styles.row, { justifyContent: 'space-around' }]}>
			<Category
				color='blue'
				icon='attractions'
				label='Attractions'
				onPress={() => console.log('Attractions')}
			/>
			<Category
				color='yellow'
				icon='local-activity'
				label='Things to do'
				onPress={() => console.log('Things to do')}
			/>
		</View>
	</Screen>
);
