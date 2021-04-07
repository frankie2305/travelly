import React, { useContext } from 'react';
import { View, ScrollView, Linking, Alert } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../contexts';
import { Button, Card, Text, Touchable } from '../components';
import { colors, db, styles } from '../constants';
import { colorize, renderStars, singularize } from '../utils';

export default TravelDetails = ({ navigation, route }) => {
	const { name } = route.params;
	const { travels, setTravels } = useContext(UserContext);
	const travel = travels.find(travel => travel.name === name);
	if (travel) {
		const city = travel.city;
		const restaurants = db[city].restaurants.filter(item => travel.restaurants.includes(item.name));
		const hotels = db[city].hotels.filter(item => travel.hotels.includes(item.name));
		const attractions = db[city].attractions.filter(item => travel.attractions.includes(item.name));
		const activities = db[city].activities.filter(item => travel.activities.includes(item.name));
		const renderItem = (category, item, index) => (
			<Card key={item.name} color={colorize(index + 1)}>
				<View style={[styles.row, { alignItems: 'center', justifyContent: 'space-between' }]}>
					<View style={{ flex: 1 }}>
						<Text color={colorize(index)} style={{ fontFamily: 'roboto-bold' }}>
							{item.name}
						</Text>
						<View style={styles.row}>
							{item.stars && renderStars(item.stars, 14, colorize(index))}
							<Text color={colorize(index)} style={{ fontSize: 14 }}>
								{item.stars && ', '}
								{item.summary}
							</Text>
						</View>
						{item.location && (
							<Touchable onPress={() => Linking.openURL(`https://www.google.com/maps/place/${item.location}`)}>
								<View style={styles.row}>
									<MaterialIcons name='location-pin' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
									<Text color={colorize(index)} style={{ fontSize: 12 }}>
										{' '}
										{item.location}
									</Text>
								</View>
							</Touchable>
						)}
						{item.website && (
							<Touchable onPress={() => Linking.openURL(item.website)}>
								<View style={styles.row}>
									<MaterialIcons name='web' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
									<Text color={colorize(index)} style={{ fontSize: 12 }}>
										{' '}
										{item.website}
									</Text>
								</View>
							</Touchable>
						)}
						{item.email && (
							<Touchable onPress={() => Linking.openURL(`mailto:${item.email}`)}>
								<View style={styles.row}>
									<MaterialIcons name='email' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
									<Text color={colorize(index)} style={{ fontSize: 12 }}>
										{' '}
										{item.email}
									</Text>
								</View>
							</Touchable>
						)}
						{item.phone && (
							<Touchable onPress={() => Linking.openURL(`tel:${item.phone}`)}>
								<View style={styles.row}>
									<MaterialIcons name='phone' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
									<Text color={colorize(index)} style={{ fontSize: 12 }}>
										{' '}
										{item.phone}
									</Text>
								</View>
							</Touchable>
						)}
						{item.operatedBy && (
							<Touchable onPress={() => Linking.openURL(`https://www.google.com/search?q=${item.operatedBy}`)}>
								<View style={styles.row}>
									<MaterialIcons name='person' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
									<Text color={colorize(index)} style={{ fontSize: 12 }}>
										{' '}
										{item.operatedBy}
									</Text>
								</View>
							</Touchable>
						)}
						{item.duration && (
							<View style={styles.row}>
								<MaterialIcons name='access-time' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
								<Text color={colorize(index)} style={{ fontSize: 12 }}>
									{' '}
									{item.duration}
								</Text>
							</View>
						)}
						{item.price && (
							<View style={styles.row}>
								<MaterialIcons name='attach-money' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />
								<Text color={colorize(index)} style={{ fontSize: 12 }}>
									{' '}
									from {item.price} per adult
								</Text>
							</View>
						)}
					</View>
					<MaterialIcons
						name='delete'
						size={24}
						color={colors.red}
						onPress={() =>
							Alert.alert(`Deleting ${singularize(category)}`, `Are you sure you want to delete this ${singularize(category)} from ${name}? This cannot be undone.`, [
								{ text: 'Cancel', style: 'cancel' },
								{
									text: 'OK',
									style: 'destructive',
									onPress: () =>
										setTravels(
											travels.map(travel =>
												travel.name === name
													? {
															...travel,
															[category]: travel[category].filter(temp => temp !== item.name),
													  }
													: travel
											)
										),
								},
							])
						}
					/>
				</View>
			</Card>
		);

		return (
			<ScrollView
				style={{
					flex: 1,
					marginVertical: Constants.statusBarHeight,
					marginHorizontal: 10,
				}}>
				<Text color='blue' style={[styles.title, { textAlign: 'center' }]}>
					Travel details of {name}
				</Text>
				<Text />
				<View
					style={[
						styles.row,
						{
							justifyContent: 'space-between',
						},
					]}>
					<Text color='red' style={[styles.label, { textTransform: 'none' }]}>
						Restaurants
					</Text>
					<MaterialIcons name='add' size={30} color={colors.red} onPress={() => console.log('added restaurants')} />
				</View>
				{restaurants.length === 0 ? (
					<Text color='pink' style={{ textAlign: 'center' }}>
						You don't have any restaurants for this travel yet.
					</Text>
				) : (
					restaurants.map((item, index) => renderItem('restaurants', item, index))
				)}
				<Text />
				<View
					style={[
						styles.row,
						{
							justifyContent: 'space-between',
						},
					]}>
					<Text color='green' style={[styles.label, { textTransform: 'none' }]}>
						Hotels
					</Text>
					<MaterialIcons name='add' size={30} color={colors.green} onPress={() => console.log('added hotels')} />
				</View>
				{hotels.length === 0 ? (
					<Text color='teal' style={{ textAlign: 'center' }}>
						You don't have any hotels for this travel yet.
					</Text>
				) : (
					hotels.map((item, index) => renderItem('hotels', item, index))
				)}
				<Text />
				<View
					style={[
						styles.row,
						{
							justifyContent: 'space-between',
						},
					]}>
					<Text color='blue' style={[styles.label, { textTransform: 'none' }]}>
						Attractions
					</Text>
					<MaterialIcons name='add' size={30} color={colors.blue} onPress={() => console.log('added attractions')} />
				</View>
				{attractions.length === 0 ? (
					<Text color='cyan' style={{ textAlign: 'center' }}>
						You don't have any attractions for this travel yet.
					</Text>
				) : (
					attractions.map((item, index) => renderItem('attractions', item, index))
				)}
				<Text />
				<View
					style={[
						styles.row,
						{
							justifyContent: 'space-between',
						},
					]}>
					<Text color='yellow' style={[styles.label, { textTransform: 'none' }]}>
						Things to do
					</Text>
					<MaterialIcons name='add' size={30} color={colors.yellow} onPress={() => console.log('added things to do')} />
				</View>
				{activities.length === 0 ? (
					<Text color='orange' style={{ textAlign: 'center' }}>
						You don't have any things to do for this travel yet.
					</Text>
				) : (
					activities.map((item, index) => renderItem('activities', item, index))
				)}
				<Text />
				<View style={styles.center}>
					<Button
						color='red'
						icon='delete'
						title='Delete this travel'
						onPress={() =>
							Alert.alert('Deleting travel', `Are you sure you want to delete ${name}? This cannot be undone.`, [
								{ text: 'Cancel', style: 'cancel' },
								{
									text: 'OK',
									style: 'destructive',
									onPress: () => {
										setTravels(travels.filter(item => item.name !== name));
										navigation.navigate('Travels');
									},
								},
							])
						}
					/>
				</View>
			</ScrollView>
		);
	}

	return null;
};
