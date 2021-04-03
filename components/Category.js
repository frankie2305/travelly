import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from './Text';
import Touchable from './Touchable';
import { colors, styles } from '../constants';

export default Category = ({ color, icon, label, onPress }) => (
	<Touchable style={styles.center} onPress={onPress}>
		<View>
			<View style={extraStyles.container}>
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
		elevation: 5,
		shadowColor: colors.black,
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
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
