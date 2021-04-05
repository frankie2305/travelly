import React, { useContext, useState } from 'react';
import { View, ImageBackground, Alert } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../contexts';
import { Category, Modal, Screen, Text, Touchable } from '../components';
import { colors, styles } from '../constants';

export default Home = () => {
	const cities = [
		{ label: 'Sydney', value: 'sydney' },
		{ label: 'Melbourne', value: 'melbourne' },
	];
	const { showActionSheetWithOptions } = useActionSheet();
	const { setModalVisible } = useContext(ModalContext);
	const [city, setCity] = useState('');
	const cityAlert = () => Alert.alert('Oops!', 'Please choose a city first.');
	const [category, setCategory] = useState('');

	return (
		<Screen>
			<Modal city={city} category={category} />
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
								styles.btn,
								{ backgroundColor: colors.white },
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
						onPress={() => {
							if (city) {
								setCategory('restaurants');
								setModalVisible(true);
							} else cityAlert();
						}}
					/>
					<Category
						color='green'
						icon='hotel'
						label='Hotels'
						onPress={() => {
							if (city) {
								setCategory('hotels');
								setModalVisible(true);
							} else cityAlert();
						}}
					/>
				</View>
				<View style={[styles.row, { justifyContent: 'space-around' }]}>
					<Category
						color='blue'
						icon='attractions'
						label='Attractions'
						onPress={() => {
							if (city) {
								setCategory('attractions');
								setModalVisible(true);
							} else cityAlert();
						}}
					/>
					<Category
						color='yellow'
						icon='local-activity'
						label='Things to do'
						onPress={() => {
							if (city) {
								setCategory('activities');
								setModalVisible(true);
							} else cityAlert();
						}}
					/>
				</View>
			</View>
		</Screen>
	);
};
