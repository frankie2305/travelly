import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
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
	disableFlex: {
		flex: 0,
	},
	flex: {
		flex: 1,
	},
	label: {
		fontFamily: 'roboto-bold',
		fontSize: 24,
		textTransform: 'uppercase',
	},
	modal: {
		flex: 1,
		backgroundColor: colors.blurred,
	},
	modalBody: {
		flex: 1,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	modalBodyText: {
		fontSize: 12,
	},
	modalBodyTitleText: {
		fontFamily: 'roboto-bold',
	},
	modalCardContainer: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	modalClose: {
		alignSelf: 'center',
		marginBottom: 10,
	},
	modalContent: {
		flex: 1,
		backgroundColor: colors.white,
		borderColor: 'transparent',
		borderRadius: 10,
	},
	modalDialog: {
		flex: 1,
		margin: Constants.statusBarHeight,
		marginTop: Constants.statusBarHeight * 3,
	},
	modalHeader: {
		backgroundColor: colors.blue,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	modalHeaderText: {
		fontFamily: 'roboto-black',
		fontSize: 20,
	},
	row: {
		flexDirection: 'row',
	},
	shadow: {
		elevation: 5,
		shadowColor: colors.black,
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	textCenter: {
		textAlign: 'center',
	},
	textError: {
		marginTop: 10,
		marginBottom: 20,
	},
	textInput: {
		borderColor: colors.gray,
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth,
		fontFamily: 'roboto-regular',
		fontSize: 20,
		padding: 10,
		textAlign: 'center',
	},
	textOriginal: {
		textTransform: 'none',
	},
	title: {
		fontFamily: 'roboto-black',
		fontSize: 30,
		textTransform: 'uppercase',
	},
});
