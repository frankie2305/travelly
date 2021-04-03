import React from 'react';
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native';

export default Touchable = ({ children, ...props }) =>
	Platform.OS === 'android' ? (
		<TouchableNativeFeedback {...props}>{children}</TouchableNativeFeedback>
	) : (
		<TouchableOpacity {...props}>{children}</TouchableOpacity>
	);
