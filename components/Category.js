import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from './Text';
import Touchable from './Touchable';
import { colors, styles } from '../constants';

export default Category = ({ color, icon, label, onPress }) => (
	<Touchable btn style={styles.center} onPress={onPress}>
		<View>
			<View style={[styles.shadow, extraStyles.container]}>
				<View
					style={[
						styles.center,
						extraStyles.icon,
						{ backgroundColor: colors[color] },
					]}>
					<MaterialIcons name={icon} size={30} color={colors.white} />
				</View>
			</View>
			<Text color='gray' style={extraStyles.label}>
				{label}
			</Text>
		</View>
	</Touchable>
);

const extraStyles = StyleSheet.create({
	container: {
		width: 70,
		height: 70,
	},
	icon: {
		flex: 1,
		borderRadius: 10,
	},
	label: {
		fontSize: 12,
		marginTop: 10,
		textAlign: 'center',
	},
});
