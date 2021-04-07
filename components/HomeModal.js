import React, { useContext, useState } from 'react';
import { View, Modal, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext, UserContext } from '../contexts';
import Button from './Button';
import Card from './Card';
import CheckBox from './CheckBox';
import Text from './Text';
import { colors, db, styles } from '../constants';
import { capitalize, colorize, renderStars, singularize } from '../utils';

export default HomeModal = ({ city, category }) => {
	const { homeModalVisible, setHomeModalVisible } = useContext(ModalContext);
	const { travels, setTravels } = useContext(UserContext);
	const [name, setName] = useState('');
	const [add, setAdd] = useState(false);
	const [chosen, setChosen] = useState([]);

	return (
		<Modal animationType='fade' hardwareAccelerated onRequestClose={() => setHomeModalVisible(false)} transparent visible={homeModalVisible}>
			<View style={styles.modal}>
				<View style={styles.modalDialog}>
					<View style={[styles.shadow, styles.modalContent]}>
						{city &&
							category &&
							(add ? (
								<>
									<View style={styles.modalHeader}>
										<MaterialIcons
											style={styles.modalClose}
											name='arrow-back'
											size={24}
											color={colors.white}
											onPress={
												chosen.length === 0
													? () => setAdd(false)
													: () => {
															Alert.alert('Going back', 'Are you sure you want to go back? You will lose all the changes.', [
																{ text: 'Cancel', style: 'cancel' },
																{
																	text: 'OK',
																	style: 'destructive',
																	onPress: () => {
																		setChosen([]);
																		setAdd(false);
																	},
																},
															]);
													  }
											}
										/>
										<Text color='white' style={styles.modalHeaderText}>
											Choose which travel(s) you want to add the {singularize(category)} to or press the back button to go back
										</Text>
									</View>
									<View style={styles.modalBody}>
										<Text color='blue' style={styles.modalHeaderText}>
											Your existing travels to {capitalize(city)}
										</Text>
										<FlatList
											data={travels.filter(item => item.city === city)}
											keyExtractor={item => item.name}
											renderItem={({ item, index }) => (
												<Card color={colorize(index + 1)}>
													<View style={[styles.row, styles.modalCardContainer]}>
														<View style={{ flex: 1 }}>
															<Text color={colorize(index)} style={styles.modalBodyTitleText}>
																{item.name}
															</Text>
															<Text color={colorize(index)} style={styles.modalBodyText}>
																{item[category].length} {item[category].length === 1 ? singularize(category) : category === 'activities' ? 'things to do' : category}
															</Text>
															{item[category].includes(name) && (
																<Text color='red' style={styles.modalBodyText}>
																	{item.name} already has the {singularize(category)}.
																</Text>
															)}
														</View>
														<CheckBox
															checked={chosen.includes(item.name)}
															disabled={item[category].includes(name)}
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
																	setTravels(travels.map(item => (chosen.includes(item.name) ? { ...item, [category]: [name, ...item[category]] } : item)));
																	setChosen([]);
																	setAdd(false);
																	setHomeModalVisible(false);
																},
															},
														])
													}
												/>
											</View>
										)}
									</View>
								</>
							) : (
								<>
									<View style={styles.modalHeader}>
										<MaterialIcons style={styles.modalClose} name='cancel' size={24} color={colors.white} onPress={() => setHomeModalVisible(false)} />
										<Text color='white' style={styles.modalHeaderText}>
											Press + at the end of each {singularize(category)} to add it to your travel(s) or press the close button to cancel
										</Text>
									</View>
									<View style={styles.modalBody}>
										<Text color='blue' style={styles.modalHeaderText}>
											{category === 'activities' ? 'Things to do' : capitalize(category)} in {capitalize(city)}
										</Text>
										<FlatList
											data={db[city][category]}
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
														</View>
														<MaterialIcons
															name='add'
															size={24}
															color={index % 2 === 0 ? colors.white : colors.black}
															onPress={() => {
																setName(item.name);
																setAdd(true);
															}}
														/>
													</View>
												</Card>
											)}
										/>
									</View>
								</>
							))}
					</View>
				</View>
			</View>
		</Modal>
	);
};
