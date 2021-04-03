import React from 'react';
import {
	TouchableWithoutFeedback,
	Keyboard,
	SafeAreaView,
	StyleSheet,
} from 'react-native';

export default Screen = ({ style, children }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
	</TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
