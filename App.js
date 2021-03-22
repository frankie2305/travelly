import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
	Roboto_900Black,
} from '@expo-google-fonts/roboto';

export default App = () => {
	const [fontsLoaded] = useFonts({
		'roboto-regular': Roboto_400Regular,
		'roboto-bold': Roboto_700Bold,
		'roboto-black': Roboto_900Black,
	});

	if (!fontsLoaded) return <AppLoading />;

	return (
		<View style={styles.container}>
			<Text style={{ fontFamily: 'roboto-regular' }}>
				Open up App.js to start working on your app!
			</Text>
			<StatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
