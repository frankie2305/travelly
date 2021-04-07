import React, { useContext, useState } from 'react';
import { StyleSheet, View, ImageBackground, Alert } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../contexts';
import {
	Button,
	Category,
	HomeModal,
	Screen,
	Text,
	Touchable,
} from '../components';
import { colors, images, styles } from '../constants';

export default Home = ({ navigation }) => {
	const cities = [
		{ label: 'Sydney', value: 'sydney' },
		{ label: 'Melbourne', value: 'melbourne' },
	];
	const { showActionSheetWithOptions } = useActionSheet();
	const { setHomeModalVisible } = useContext(ModalContext);
	const [city, setCity] = useState('');
	const cityAlert = () => Alert.alert('Oops!', 'Please choose a city first.');
	const [category, setCategory] = useState('');

	return (
		<Screen>
			<HomeModal navigation={navigation} city={city} category={category} />
			<View style={styles.flex}>
				<ImageBackground
					source={
						city ? images[city] : images.home
					}
					resizeMode='cover'
					style={[ styles.flex, styles.center]}>
					<Touchable
						btn
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
			<View style={[styles.flex, extraStyles.container]}>
				<View style={[styles.row, extraStyles.container]}>
					<Category
						color='red'
						icon='restaurant'
						label='Restaurants'
						onPress={() => {
							if (city) {
								setCategory('restaurants');
								setHomeModalVisible(true);
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
								setHomeModalVisible(true);
							} else cityAlert();
						}}
					/>
				</View>
				<View style={[styles.row, extraStyles.container]}>
					<Category
						color='blue'
						icon='attractions'
						label='Attractions'
						onPress={() => {
							if (city) {
								setCategory('attractions');
								setHomeModalVisible(true);
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
								setHomeModalVisible(true);
							} else cityAlert();
						}}
					/>
				</View>
			</View>
			<View style={styles.center}>
				<Button
					title='Go to my travels'
					onPress={() => navigation.navigate('Travels')}
				/>
			</View>
		</Screen>
	);
};

const extraStyles = StyleSheet.create({
	container: {
		justifyContent: 'space-around',
	}
})
