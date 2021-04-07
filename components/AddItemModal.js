import React, { useContext, useState } from 'react';
import { View, Modal, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext, UserContext } from '../contexts';
import CheckBox from './CheckBox';
import Text from './Text';
import { colors, styles } from '../constants';
import { singularize } from '../utils';

export default AddItemModal = ({ travel, category }) => {
	const { addItemModalVisible, setAddItemModalVisible } = useContext(ModalContext);
	const { travels, setTravels } = useContext(UserContext);
	const [chosen, setChosen] = useState([]);

	return (
		<Modal animationType='fade' hardwareAccelerated onRequestClose={() => setAddItemModalVisible(false)} transparent visible={addItemModalVisible}>
			<View style={styles.modal}>
				<View style={styles.modalDialog}>
					<View style={[styles.shadow, styles.modalContent]}>
						{travel && category && (
							<>
								<View style={styles.modalHeader}>
									<MaterialIcons
										style={styles.modalClose}
										name='cancel'
										size={24}
										color={colors.white}
										onPress={
											chosen.length === 0
												? () => setAddItemModalVisible(false)
												: () => {
														Alert.alert('Cancelling', 'Are you sure you want to cancel? You will lose all the changes.', [
															{ text: 'Cancel', style: 'cancel' },
															{
																text: 'OK',
																style: 'destructive',
																onPress: () => {
																	setChosen([]);
																	setAddItemModalVisible(false);
																},
															},
														]);
												  }
										}
									/>
									<Text color='white' style={[styles.textCenter, styles.modalHeaderText]}>
										Choose which {category === 'activities' ? 'thing' : singularize(category)}(s){category === 'activities' && ' to do'} you want to add to this travel or press the close button to cancel
									</Text>
								</View>
								<View style={styles.modalBody}>
									<Text color='blue' style={[styles.textCenter, styles.modalHeaderText]}>
										{category === 'activities' ? 'Things to do' : capitalize(category)} in {capitalize(travel.city)}
									</Text>
									<FlatList
										data={db[travel.city][category]}
										keyExtractor={item => item.name}
										renderItem={({ item, index }) => (
											<Card color={colorize(index + 1)}>
												<View style={[styles.row, styles.modalCardContainer]}>
													<View style={{ flex: 1 }}>
														<Text color={colorize(index)} style={styles.modalBodyTitleText}>
															{item.name}
														</Text>
														<View style={styles.row}>
															{item.stars && renderStars(item.stars, 12, colorize(index))}
															<Text color={colorize(index)} style={styles.modalBodyText}>
																{item.stars && ', '}
																{item.summary}
															</Text>
														</View>
														{travel[category].includes(item.name) && (
															<Text color='red' style={styles.modalBodyText}>
																{travel.name} already has the {singularize(category)}.
															</Text>
														)}
													</View>
													<CheckBox
														checked={chosen.includes(item.name)}
														disabled={travel[category].includes(item.name)}
														onPress={chosen.includes(item.name) ? () => setChosen(chosen.filter(temp => temp !== item.name)) : () => setChosen([...chosen, item.name])}
														uncheckedColor={colorize(index)}
													/>
												</View>
											</Card>
										)}
									/>
									{chosen.length > 0 && (
										<View style={styles.center}>
											<Button
												color='green'
												icon='save'
												title='save'
												onPress={() =>
													Alert.alert('Saving changes', 'Are you sure you want to save all the changes?', [
														{ text: 'Cancel', style: 'cancel' },
														{
															text: 'OK',
															style: 'default',
															onPress: () => {
																setTravels(travels.map(item => (item.name === travel.name ? { ...item, [category]: [...chosen, ...item[category]] } : item)));
																setChosen([]);
																setAddItemModalVisible(false);
															},
														},
													])
												}
											/>
										</View>
									)}
								</View>
							</>
						)}
					</View>
				</View>
			</View>
		</Modal>
	);
};
