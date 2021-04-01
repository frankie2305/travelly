import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
	Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { AuthContextProvider, UserContextProvider } from './contexts';
import { Navigator } from './routes';

export default App = () => {
	const [fontsLoaded] = useFonts({
		'roboto-regular': Roboto_400Regular,
		'roboto-bold': Roboto_700Bold,
		'roboto-black': Roboto_900Black,
	});

	if (!fontsLoaded) return <AppLoading />;

	return (
		<AuthContextProvider>
			<UserContextProvider>
				<NavigationContainer>
					<Navigator />
				</NavigationContainer>
			</UserContextProvider>
		</AuthContextProvider>
	);
};
