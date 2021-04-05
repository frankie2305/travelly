import React, { useContext } from 'react';
import { StyleSheet, View, Modal, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../contexts';
import Card from './Card';
import Text from './Text';
import { colors, db, styles } from '../constants';
import { capitalize } from '../utils';

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
					<View style={[styles.shadow, extraStyles.modalContent]}>
						<View style={extraStyles.modalHeader}>
							<MaterialIcons
								style={extraStyles.close}
								name='cancel'
								size={24}
								color={colors.white}
								onPress={() => setModalVisible(false)}
							/>
							<Text
								color='white'
								style={extraStyles.modalHeaderText}>
								Press + at the end of each item to add it to
								your travel(s)
							</Text>
						</View>
						<View style={extraStyles.modalBody}>
							<Text
								color='blue'
								style={extraStyles.modalHeaderText}>
								{category &&
									(category === 'activities'
										? 'Things to do'
										: capitalize(category))}{' '}
								at {city && capitalize(city)}
							</Text>
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
													extraStyles.cardContainer,
												]}>
												<View
													style={
														extraStyles.modalBodyTextContainer
													}>
													<Text
														color={
															index % 2 === 0
																? 'white'
																: 'black'
														}
														style={
															extraStyles.modalBodyTitleText
														}>
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
															style={
																extraStyles.modalBodyText
															}>
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
	close: {
		alignSelf: 'center',
		marginBottom: 10,
	},
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
	modalBody: {
		flex: 1,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	cardContainer: {
		justifyContent: 'space-between',
	},
	modalBodyTextContainer: {
		flex: 1,
	},
	modalBodyTitleText: {
		fontFamily: 'roboto-bold',
	},
	modalBodyText: {
		fontSize: 12,
	},
});
