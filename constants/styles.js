import { StyleSheet } from 'react-native';
import colors from './colors';

export default styles = StyleSheet.create({
	btn: {
		borderColor: colors.gray,
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth,
		padding: 10,
		shadowColor: colors.white,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		fontFamily: 'roboto-bold',
		fontSize: 24,
		textTransform: 'uppercase',
	},
	row: {
		flexDirection: 'row',
	},
	title: {
		fontFamily: 'roboto-black',
		fontSize: 30,
		textTransform: 'uppercase',
	},
});
