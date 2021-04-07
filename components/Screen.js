import React from 'react';
import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { styles } from '../constants';

export default Screen = ({ style, children }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<SafeAreaView style={[styles.flex, style]}>{children}</SafeAreaView>
	</TouchableWithoutFeedback>
);
