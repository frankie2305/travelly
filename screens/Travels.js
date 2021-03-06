import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext, UserContext } from '../contexts';
import { AddTravelModal, Card, Text, Touchable } from '../components';
import { colors, styles } from '../constants';
import { capitalize, colorize } from '../utils';

export default Travels = ({ navigation }) => {
	const { setAddTravelModalVisible } = useContext(ModalContext);
	const { travels } = useContext(UserContext);

	return (
		<>
			<AddTravelModal />
			<View style={extraStyles.container}>
				<View style={[styles.row, styles.center]}>
					<Text color='blue' style={styles.title}>
						My Travels
					</Text>
					<MaterialIcons style={extraStyles.add} name='add' size={36} color={colors.blue} onPress={() => setAddTravelModalVisible(true)} />
				</View>
				{travels.length === 0 ? (
					<View style={[styles.flex, styles.center]}>
						<Text color='cyan' style={[styles.label, styles.textOriginal]}>
							You don't have any travels.
						</Text>
						<Text color='cyan'>Press + to create a new one.</Text>
					</View>
				) : (
					<FlatList
						data={travels}
						keyExtractor={item => item.name}
						renderItem={({ item, index }) => (
							<Touchable
								onPress={() =>
									navigation.navigate('TravelDetails', {
										name: item.name,
									})
								}>
								<Card color={colorize(index + 1)}>
									<View style={styles.flex}>
										<Text color={colorize(index)} style={{ fontFamily: 'roboto-bold' }}>
											{item.name}
										</Text>
										<Text color={colorize(index)} style={{ fontSize: 14 }}>
											Destination: {capitalize(item.city)}
										</Text>
										<Text color={colorize(index)} style={{ fontSize: 12 }}>
											{item.restaurants.length} restaurant
											{item.restaurants.length !== 1 && 's'}, {item.hotels.length} hotel
											{item.hotels.length !== 1 && 's'}, {item.attractions.length} attraction
											{item.attractions.length !== 1 && 's'}, {item.activities.length} thing
											{item.activities.length !== 1 && 's'} to do
										</Text>
									</View>
								</Card>
							</Touchable>
						)}
					/>
				)}
			</View>
		</>
	);
};

const extraStyles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: Constants.statusBarHeight,
		marginHorizontal: 10,
	},
	add: {
		position: 'absolute',
		right: 0,
	},
});
