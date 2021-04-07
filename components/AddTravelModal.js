import React, { useContext } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../contexts';
import Text from './Text';
import { colors, styles } from '../constants';

export default AddTravelModal = () => {
	const { addTravelModalVisible, setAddTravelModalVisible } = useContext(
		ModalContext
	);

	return (
		<Modal
			animationType='fade'
			hardwareAccelerated
			onRequestClose={() => setAddTravelModalVisible(false)}
			transparent
			visible={addTravelModalVisible}>
			<View style={extraStyles.modal}>
				<View style={extraStyles.modalDialog}>
					<View style={[styles.shadow, extraStyles.modalContent]}>
						<View style={extraStyles.modalHeader}>
							<MaterialIcons
								style={extraStyles.modalClose}
								name='cancel'
								size={24}
								color={colors.white}
								onPress={() => setAddTravelModalVisible(false)}
							/>
							<Text
								color='white'
								style={extraStyles.modalHeaderText}>
								New Travel Form
							</Text>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const extraStyles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalDialog: {
		flex: 1,
		margin: Constants.statusBarHeight,
		marginTop: Constants.statusBarHeight * 3,
	},
	modalContent: {
		flex: 1,
		backgroundColor: colors.white,
		borderColor: 'transparent',
		borderRadius: 10,
	},
	modalClose: {
		alignSelf: 'center',
		marginBottom: 10,
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
		textAlign: 'center',
	},
});
