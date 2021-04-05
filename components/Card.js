import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, styles } from '../constants';

export default Card = ({ color = 'white', children }) => (
	<View
		style={[
			styles.shadow,
			extraStyles.card,
			{ backgroundColor: colors[color] },
		]}>
		<View style={extraStyles.content}>{children}</View>
	</View>
);

const extraStyles = StyleSheet.create({
	card: {
		borderRadius: 10,
		margin: 10,
	},
	content: {
		padding: 20,
	},
});
