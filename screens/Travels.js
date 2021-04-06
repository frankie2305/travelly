import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../contexts';
import { Card, Text, Touchable } from '../components';
import { colors, styles } from '../constants';
import { capitalize } from '../utils';

export default Travels = ({ navigation }) => {
	const { travels } = useContext(UserContext);

	return (
		<View
			style={{
				flex: 1,
				marginVertical: Constants.statusBarHeight,
				marginHorizontal: 10,
			}}>
			<View style={[styles.row, styles.center]}>
				<Text color='blue' style={styles.title}>
					My Travels
				</Text>
				<MaterialIcons
					style={{ position: 'absolute', right: 0 }}
					name='add'
					size={36}
					color={colors.blue}
					onPress={() => console.log('added travel')}
				/>
			</View>
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
						<Card color={index % 2 === 0 ? 'black' : 'white'}>
							<View style={{ flex: 1 }}>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontFamily: 'roboto-bold' }}>
									{item.name}
								</Text>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 14 }}>
									Destination: {capitalize(item.city)}
								</Text>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 12 }}>
									{item.restaurants.length} restaurant
									{item.restaurants.length !== 1 && 's'},{' '}
									{item.hotels.length} hotel
									{item.hotels.length !== 1 && 's'},{' '}
									{item.attractions.length} attraction
									{item.attractions.length !== 1 && 's'},{' '}
									{item.activities.length} thing
									{item.activities.length !== 1 && 's'} to do
								</Text>
							</View>
						</Card>
					</Touchable>
				)}
			/>
		</View>
	);
};
