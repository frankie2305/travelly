import React, { useContext, useState } from 'react';
import { View, ImageBackground, Alert } from 'react-native';
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
import { colors, styles } from '../constants';

export default Home = ({ navigation }) => {
	const cities = [
		{ label: 'Sydney', value: 'sydney' },
		{ label: 'Melbourne', value: 'melbourne' },
	];
	const cityImages = {
		// By Benh LIEU SONG (Flickr) - Sydney&#039;s Landmarks 2, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=82284289
		sydney: require('../assets/sydney.jpg'),
		// By Montage by HappyWaldo - Own work by uploader created from licence-free images from Commons., CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=78098825
		melbourne: require('../assets/melbourne.jpg'),
	};
	const { showActionSheetWithOptions } = useActionSheet();
	const { setHomeModalVisible } = useContext(ModalContext);
	const [city, setCity] = useState('');
	const cityAlert = () => Alert.alert('Oops!', 'Please choose a city first.');
	const [category, setCategory] = useState('');

	return (
		<Screen>
			<HomeModal city={city} category={category} />
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={
						city ? cityImages[city] : require('../assets/home.png')
					}
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
				<View style={[styles.row, { justifyContent: 'space-around' }]}>
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
