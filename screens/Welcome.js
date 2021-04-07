import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Text } from '../components';
import { images } from '../constants';

export default Welcome = ({ navigation }) => (
	<ImageBackground
		source={images.welcome}
		resizeMode='contain'
		style={styles.bg}>
		<View style={styles.btnContainer}>
			<Button
				color='cyan'
				title='Sign up'
				onPress={() => navigation.navigate('Signup')}
			/>
			<Text />
			<Button
				color='white'
				title='Log in'
				titleColor='cyan'
				onPress={() => navigation.navigate('Login')}
			/>
		</View>
	</ImageBackground>
);

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		backgroundColor: '#003fba',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	btnContainer: {
		width: '50%',
		marginBottom: '20%',
	},
});
