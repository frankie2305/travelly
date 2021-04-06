import React, { useContext } from 'react';
import { View, ScrollView, Linking } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../contexts';
import { Button, Card, Text, Touchable } from '../components';
import { colors, db, styles } from '../constants';

export default TravelDetails = ({ route }) => {
	const { name } = route.params;
	const { travels } = useContext(UserContext);
	const travel = travels.find(travel => travel.name === name);
	const city = travel.city;
	const restaurants = travel.restaurants.map(name =>
		db[city].restaurants.find(item => item.name === name)
	);
	const hotels = travel.hotels.map(name =>
		db[city].hotels.find(item => item.name === name)
	);
	const attractions = travel.attractions.map(name =>
		db[city].attractions.find(item => item.name === name)
	);
	const activities = travel.activities.map(name =>
		db[city].activities.find(item => item.name === name)
	);
	const renderItem = (item, index) => (
		<Card key={item.name} color={index % 2 == 0 ? 'black' : 'white'}>
			<View
				style={[
					styles.row,
					{ alignItems: 'center', justifyContent: 'space-between' },
				]}>
				<View style={{ flex: 1 }}>
					<Text
						color={index % 2 == 0 ? 'white' : 'black'}
						style={{ fontFamily: 'roboto-bold' }}>
						{item.name}
					</Text>
					<View style={styles.row}>
						{item.stars &&
							[...Array(Number(item.stars))].map((value, i) => (
								<MaterialIcons
									key={i}
									name='star'
									size={14}
									color={
										index % 2 === 0
											? colors.white
											: colors.gray
									}
								/>
							))}
						<Text
							color={index % 2 === 0 ? 'white' : 'black'}
							style={{ fontSize: 14 }}>
							{item.stars && ', '}
							{item.summary}
						</Text>
					</View>
					{item.location && (
						<Touchable
							onPress={() =>
								Linking.openURL(
									`https://www.google.com/maps/place/${item.location}`
								)
							}>
							<View style={styles.row}>
								<MaterialIcons
									name='location-pin'
									size={12}
									color={
										index % 2 === 0
											? colors.white
											: colors.gray
									}
								/>

								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 12 }}>
									{' '}
									{item.location}
								</Text>
							</View>
						</Touchable>
					)}
					{item.website && (
						<Touchable
							onPress={() => Linking.openURL(item.website)}>
							<View style={styles.row}>
								<MaterialIcons
									name='web'
									size={12}
									color={
										index % 2 === 0
											? colors.white
											: colors.gray
									}
								/>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 12 }}>
									{' '}
									{item.website}
								</Text>
							</View>
						</Touchable>
					)}
					{item.email && (
						<Touchable
							onPress={() =>
								Linking.openURL(`mailto:${item.email}`)
							}>
							<View style={styles.row}>
								<MaterialIcons
									name='email'
									size={12}
									color={
										index % 2 === 0
											? colors.white
											: colors.gray
									}
								/>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 12 }}>
									{' '}
									{item.email}
								</Text>
							</View>
						</Touchable>
					)}
					{item.phone && (
						<Touchable
							onPress={() =>
								Linking.openURL(`tel:${item.phone}`)
							}>
							<View style={styles.row}>
								<MaterialIcons
									name='phone'
									size={12}
									color={
										index % 2 === 0
											? colors.white
											: colors.gray
									}
								/>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 12 }}>
									{' '}
									{item.phone}
								</Text>
							</View>
						</Touchable>
					)}
					{item.operatedBy && (
						<Touchable
							onPress={() =>
								Linking.openURL(
									`https://www.google.com/search?q=${item.operatedBy}`
								)
							}>
							<View style={styles.row}>
								<MaterialIcons
									name='person'
									size={12}
									color={
										index % 2 === 0
											? colors.white
											: colors.gray
									}
								/>
								<Text
									color={index % 2 === 0 ? 'white' : 'black'}
									style={{ fontSize: 12 }}>
									{' '}
									{item.operatedBy}
								</Text>
							</View>
						</Touchable>
					)}
					{item.duration && (
						<View style={styles.row}>
							<MaterialIcons
								name='access-time'
								size={12}
								color={
									index % 2 === 0 ? colors.white : colors.gray
								}
							/>
							<Text
								color={index % 2 === 0 ? 'white' : 'black'}
								style={{ fontSize: 12 }}>
								{' '}
								{item.duration}
							</Text>
						</View>
					)}
					{item.price && (
						<View style={styles.row}>
							<MaterialIcons
								name='attach-money'
								size={12}
								color={
									index % 2 === 0 ? colors.white : colors.gray
								}
							/>
							<Text
								color={index % 2 === 0 ? 'white' : 'black'}
								style={{ fontSize: 12 }}>
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
					onPress={() => console.log('deleted item')}
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
			<Text
				color='blue'
				style={[
					styles.title,
					{
						textAlign: 'center',
					},
				]}>
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
				<Text
					color='red'
					style={[styles.label, { textTransform: 'none' }]}>
					Restaurants
				</Text>
				<MaterialIcons
					name='add'
					size={30}
					color={colors.red}
					onPress={() => console.log('added restaurants')}
				/>
			</View>
			{restaurants.length === 0 ? (
				<Text color='pink' style={{ textAlign: 'center' }}>
					You don't have any restaurants for this travel yet.
				</Text>
			) : (
				restaurants.map((item, index) => renderItem(item, index))
			)}
			<Text />
			<View
				style={[
					styles.row,
					{
						justifyContent: 'space-between',
					},
				]}>
				<Text
					color='green'
					style={[styles.label, { textTransform: 'none' }]}>
					Hotels
				</Text>
				<MaterialIcons
					name='add'
					size={30}
					color={colors.green}
					onPress={() => console.log('added hotels')}
				/>
			</View>
			{hotels.length === 0 ? (
				<Text color='teal' style={{ textAlign: 'center' }}>
					You don't have any hotels for this travel yet.
				</Text>
			) : (
				hotels.map((item, index) => renderItem(item, index))
			)}
			<Text />
			<View
				style={[
					styles.row,
					{
						justifyContent: 'space-between',
					},
				]}>
				<Text
					color='blue'
					style={[styles.label, { textTransform: 'none' }]}>
					Attractions
				</Text>
				<MaterialIcons
					name='add'
					size={30}
					color={colors.blue}
					onPress={() => console.log('added attractions')}
				/>
			</View>
			{attractions.length === 0 ? (
				<Text color='cyan' style={{ textAlign: 'center' }}>
					You don't have any attractions for this travel yet.
				</Text>
			) : (
				attractions.map((item, index) => renderItem(item, index))
			)}
			<Text />
			<View
				style={[
					styles.row,
					{
						justifyContent: 'space-between',
					},
				]}>
				<Text
					color='yellow'
					style={[styles.label, { textTransform: 'none' }]}>
					Things to do
				</Text>
				<MaterialIcons
					name='add'
					size={30}
					color={colors.yellow}
					onPress={() => console.log('added things to do')}
				/>
			</View>
			{activities.length === 0 ? (
				<Text color='orange' style={{ textAlign: 'center' }}>
					You don't have any things to do for this travel yet.
				</Text>
			) : (
				activities.map((item, index) => renderItem(item, index))
			)}
			<Text />
			<View style={styles.center}>
				<Button
					color='red'
					icon='delete'
					title='Delete this travel'
					onPress={() => console.log('deleted travel')}
				/>
			</View>
		</ScrollView>
	);
};
