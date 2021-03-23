import React from 'react';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
	Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { Login, Signup } from './screens';

export default App = () => {
	const [fontsLoaded] = useFonts({
		'roboto-regular': Roboto_400Regular,
		'roboto-bold': Roboto_700Bold,
		'roboto-black': Roboto_900Black,
	});

	if (!fontsLoaded) return <AppLoading />;

	return <Login />;
};
