import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { UserContext } from '../contexts';
import { Card, Text } from '../components';
import { styles } from '../constants';

export default Travels = () => {
	const { travels } = useContext(UserContext);

	return (
		<View
			style={{
				flex: 1,
				marginVertical: Constants.statusBarHeight,
				marginHorizontal: 10,
			}}>
			<Text
				color='blue'
				style={[
					styles.title,
					{
						textAlign: 'center',
					},
				]}>
				My Travels
			</Text>
			<FlatList
				data={travels}
				keyExtractor={item => item.name}
				renderItem={({ item, index }) => (
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
								Destination:{' '}
								{item.city[0].toUpperCase() +
									item.city.substring(1)}
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
				)}
			/>
		</View>
	);
};
