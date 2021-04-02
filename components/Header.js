import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from './Text';
import { colors, styles } from '../constants';

export default Header = ({ navigation, icon, title }) => (
	<View style={[styles.row, styles.center, { width: '100%' }]}>
		<MaterialIcons
			style={{ position: 'absolute', left: 0 }}
			name='menu'
			size={24}
			color={colors.white}
			onPress={navigation.openDrawer}
		/>
		<View style={[styles.row, styles.center]}>
			<MaterialIcons name={icon} size={24} color={colors.white} />
			<Text color='white' style={styles.label}>
				{' '}
				{title}
			</Text>
		</View>
	</View>
);
