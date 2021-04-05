import React, { useContext } from 'react';
import { StyleSheet, View, Modal, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../contexts';
import Card from './Card';
import Text from './Text';
import { colors, db, styles } from '../constants';

export default CustomModal = ({ city, category }) => {
	const { modalVisible, setModalVisible } = useContext(ModalContext);

	return (
		<Modal
			animationType='fade'
			hardwareAccelerated
			onRequestClose={() => setModalVisible(false)}
			transparent
			visible={modalVisible}>
			<View style={extraStyles.modal}>
				<View style={extraStyles.modalDialog}>
					<View style={extraStyles.modalContent}>
						<View style={extraStyles.modalHeader}>
							<MaterialIcons
								style={extraStyles.close}
								name='cancel'
								size={24}
								color={colors.white}
								onPress={() => setModalVisible(false)}
							/>
							<Text color='white' style={{ textAlign: 'center' }}>
								Press + at the end of each item to add it to
								your travel(s)
							</Text>
						</View>
						<View style={extraStyles.modalBody}>
							{city && category && (
								<FlatList
									data={db[city][category]}
									keyExtractor={item => item.name}
									renderItem={({ item, index }) => (
										<Card
											color={
												index % 2 === 0
													? 'black'
													: 'white'
											}>
											<View
												style={[
													styles.row,
													{
														justifyContent:
															'space-between',
													},
												]}>
												<View style={{ flex: 1 }}>
													<Text
														color={
															index % 2 === 0
																? 'white'
																: 'black'
														}
														style={{
															fontFamily:
																'roboto-bold',
														}}>
														{item.name}
													</Text>
													<View style={styles.row}>
														{item.stars &&
															[
																...Array(
																	Number(
																		item.stars
																	)
																),
															].map(
																(value, i) => (
																	<MaterialIcons
																		key={i}
																		name='star'
																		size={
																			12
																		}
																		color={
																			index %
																				2 ===
																			0
																				? colors.white
																				: colors.gray
																		}
																	/>
																)
															)}
														<Text
															color={
																index % 2 === 0
																	? 'white'
																	: 'black'
															}
															style={{
																fontSize: 12,
															}}>
															{item.stars && ', '}
															{item.summary}
														</Text>
													</View>
												</View>
												<MaterialIcons
													name='add'
													size={24}
													color={
														index % 2 === 0
															? colors.white
															: colors.black
													}
													onPress={() =>
														console.log('added')
													}
												/>
											</View>
										</Card>
									)}
								/>
							)}
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
	modalBody: {
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	modalDialog: {
		flex: 1,
		margin: Constants.statusBarHeight,
		marginTop: Constants.statusBarHeight * 3,
	},
	modalContent: {
		backgroundColor: colors.white,
		borderColor: 'transparent',
		borderRadius: 10,
		elevation: 5,
		shadowColor: colors.black,
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	modalHeader: {
		backgroundColor: colors.blue,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	close: {
		alignSelf: 'flex-end',
		marginBottom: 10,
	},
});
