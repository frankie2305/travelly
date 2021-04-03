import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { Category, Screen, Text, Touchable } from '../components';
import { colors, styles } from '../constants';

export default Home = () => {
	const cities = [
		{ label: 'Sydney', value: 'sydney' },
		{ label: 'Melbourne', value: 'melbourne' },
	];
	const [city, setCity] = useState('');
	const { showActionSheetWithOptions } = useActionSheet();

	return (
		<Screen>
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={require('../assets/home.png')}
					resizeMode='cover'
					style={[styles.center, { flex: 1 }]}>
					<Touchable
						onPress={() =>
							showActionSheetWithOptions(
								{
									title: 'Choose a city',
									message:
										'What is the very next city you want to visit?',
									options: [
										...cities.map(c => c.label),
										'Cancel',
									],
									cancelButtonIndex: cities.length,
									destructiveButtonIndex: cities.findIndex(
										c => c.value === city
									),
								},
								buttonIndex =>
									buttonIndex < cities.length &&
									setCity(cities[buttonIndex].value)
							)
						}>
						<View
							style={[
								styles.row,
								styles.center,
								extraStyles.btn,
							]}>
							<Text color='gray'>
								{city
									? cities.find(c => c.value === city).label
									: 'Choose a city'}
							</Text>
							<MaterialIcons
								name='arrow-drop-down'
								size={24}
								color={colors.gray}
							/>
						</View>
					</Touchable>
				</ImageBackground>
			</View>
			<View style={{ flex: 1, justifyContent: 'space-around' }}>
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
			</View>
		</Screen>
	);
};

const extraStyles = StyleSheet.create({
	btn: {
		backgroundColor: colors.white,
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
		padding: 10,
		shadowColor: '#f2f2f2',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
});
