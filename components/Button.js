import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from './Text';
import Touchable from './Touchable';
import { colors, styles } from '../constants';

export default Button = ({
	color = 'blue',
	icon,
	iconColor = 'white',
	title,
	titleColor = 'white',
	onPress,
}) => (
	<Touchable onPress={onPress}>
		<View
			style={[
				styles.row,
				styles.center,
				extraStyles.btn,
				{
					backgroundColor: colors[color],
				},
			]}>
			<MaterialIcons name={icon} size={24} color={colors[iconColor]} />
			<Text color={titleColor} style={styles.label}>
				{' '}
				{title}
			</Text>
		</View>
	</Touchable>
);

const extraStyles = StyleSheet.create({
	btn: {
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
		padding: 10,
		shadowColor: colors.white,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
});
