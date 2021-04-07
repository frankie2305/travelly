import React, { useContext } from 'react';
import { View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../contexts';
import Text from './Text';
import { colors, styles } from '../constants';

export default AddItemModal = () => {
	const { addItemModalVisible, setAddItemModalVisible } = useContext(
		ModalContext
	);

	return (
		<Modal
			animationType='fade'
			hardwareAccelerated
			onRequestClose={() => setAddItemModalVisible(false)}
			transparent
			visible={addItemModalVisible}>
			<View style={styles.modal}>
				<View style={styles.modalDialog}>
					<View style={[styles.shadow, styles.modalContent]}>
						<View style={styles.modalHeader}>
							<MaterialIcons
								style={styles.modalClose}
								name='cancel'
								size={24}
								color={colors.white}
								onPress={() => setAddItemModalVisible(false)}
							/>
							<Text
								color='white'
								style={styles.modalHeaderText}>
								New Item Form
							</Text>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};
