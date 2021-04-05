import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext, UserContext } from '../contexts';
import HomeStack from './HomeStack';
import TravelsStack from './TravelsStack';
import { Text } from '../components';
import { colors, styles } from '../constants';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ username, logout, state, navigation, ...props }) => {
	const icons = ['home', 'luggage'];

	return (
		<DrawerContentScrollView
			{...props}
			scrollEnabled={false}
			contentContainerStyle={{
				flex: 1,
				justifyContent: 'space-between',
			}}>
			<View>
				<Text
					color='blue'
					style={{ marginBottom: '10%', textAlign: 'center' }}>
					{username}
				</Text>
				{state.routes.map((route, index) => (
					<DrawerItem
						key={route.key}
						focused={state.index === index}
						label={route.name}
						labelStyle={styles.label}
						icon={({ size, color }) => (
							<MaterialIcons
								name={icons[index]}
								size={size}
								color={color}
							/>
						)}
						onPress={() => navigation.navigate(route.name)}
						activeBackgroundColor={colors.blue}
						activeTintColor={colors.white}
					/>
				))}
			</View>
			<DrawerItem
				style={{ marginBottom: '10%' }}
				label='log out'
				labelStyle={styles.label}
				icon={({ size, color }) => (
					<MaterialIcons
						style={{ marginLeft: '10%' }}
						name='logout'
						size={size}
						color={color}
					/>
				)}
				onPress={() =>
					Alert.alert(
						'Logging out',
						'Are you sure you want to log out?',
						[
							{ text: 'Cancel', style: 'cancel' },
							{
								text: 'OK',
								style: 'destructive',
								onPress: logout,
							},
						]
					)
				}
			/>
		</DrawerContentScrollView>
	);
};

export default DrawerNavigator = () => {
	const { logout } = useContext(AuthContext);
	const { user } = useContext(UserContext);

	return (
		<Drawer.Navigator
			drawerContent={props => (
				<DrawerContent
					{...props}
					username={user.username}
					logout={logout}
				/>
			)}>
			<Drawer.Screen name='Home' component={HomeStack} />
			<Drawer.Screen name='Travels' component={TravelsStack} />
		</Drawer.Navigator>
	);
};
