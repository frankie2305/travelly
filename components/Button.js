import React from 'react';
import {
	StyleSheet,
	View,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from './Text';
import { colors, styles } from '../constants';

export default Button = ({
	color = 'blue',
	icon,
	iconColor = 'white',
	title,
	titleColor = 'white',
	onPress,
}) =>
	Platform.OS == 'android' ? (
		<TouchableNativeFeedback onPress={onPress}>
			<View
				style={[
					styles.btn,
					{
						backgroundColor: colors[color],
					},
				]}>
				<MaterialIcons
					name={icon}
					size={24}
					color={colors[iconColor]}
				/>
				<Text color={titleColor} style={styles.title}>
					{' '}
					{title}
				</Text>
			</View>
		</TouchableNativeFeedback>
	) : (
		<TouchableOpacity onPress={onPress}>
			<View
				style={[
					styles.row,
					styles.center,
					extraStyles.btn,
					{
						backgroundColor: colors[color],
					},
				]}>
				<MaterialIcons
					name={icon}
					size={24}
					color={colors[iconColor]}
				/>
				<Text color={titleColor} style={styles.label}>
					{' '}
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);

const extraStyles = StyleSheet.create({
	btn: {
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
		padding: 10,
		shadowColor: '#f2f2f2',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
});
