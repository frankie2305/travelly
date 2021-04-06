import React from 'react';
import { View } from 'react-native';
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
	<Touchable btn onPress={onPress}>
		<View
			style={[
				styles.row,
				styles.center,
				styles.btn,
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
