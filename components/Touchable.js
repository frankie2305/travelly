import React from 'react';
import {
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native';

export default Touchable = ({ btn, children, ...props }) =>
	Platform.OS === 'android' ? (
		btn ? (
			<TouchableNativeFeedback {...props}>
				{children}
			</TouchableNativeFeedback>
		) : (
			<TouchableHighlight {...props}>{children}</TouchableHighlight>
		)
	) : (
		<TouchableOpacity {...props}>{children}</TouchableOpacity>
	);
