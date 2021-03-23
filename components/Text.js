import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../constants';

export default CustomText = ({ color = 'black', style, children }) => (
	<Text style={[styles.text, style, { color: colors[color] }]}>
		{children}
	</Text>
);

const styles = StyleSheet.create({
	text: {
		fontFamily: 'roboto-regular',
		fontSize: 16,
	},
});
