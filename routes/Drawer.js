import React, { useContext } from 'react';
import { Alert } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../contexts';
import HomeStack from './HomeStack';
import { colors, styles } from '../constants';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ logout, state, navigation, ...props }) => {
	const icons = ['home'];

	return (
		<DrawerContentScrollView
			{...props}
			scrollEnabled={false}
			contentContainerStyle={{
				flex: 1,
				justifyContent: 'space-between',
			}}>
			<>
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
			</>
			<DrawerItem
				style={{ marginBottom: '10%' }}
				label='log out'
				labelStyle={styles.label}
				icon={() => (
					<MaterialIcons
						name='logout'
						size={24}
						style={{ marginLeft: '10%' }}
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

	return (
		<Drawer.Navigator
			drawerContent={props => (
				<DrawerContent {...props} logout={logout} />
			)}>
			<Drawer.Screen name='Home' component={HomeStack} />
		</Drawer.Navigator>
	);
};
