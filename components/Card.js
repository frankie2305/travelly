import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants';

export default Card = ({ color = 'white', children }) => (
	<View style={[styles.card, { backgroundColor: colors[color] }]}>
		<View style={styles.content}>{children}</View>
	</View>
);

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		elevation: 5,
		shadowColor: colors.black,
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
		margin: 10,
	},
	content: {
		padding: 20,
	},
});
