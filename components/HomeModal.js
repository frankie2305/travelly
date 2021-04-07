import React, { useContext, useState } from 'react';
import { StyleSheet, View, Modal, FlatList, Alert } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext, UserContext } from '../contexts';
import Button from './Button';
import Card from './Card';
import CheckBox from './CheckBox';
import Text from './Text';
import { colors, db, styles } from '../constants';
import { capitalize, colorize, singularize } from '../utils';

export default HomeModal = ({ city, category }) => {
	const { homeModalVisible, setHomeModalVisible } = useContext(ModalContext);
	const { travels, setTravels } = useContext(UserContext);
	const [name, setName] = useState('');
	const [add, setAdd] = useState(false);
	const [chosen, setChosen] = useState([]);

	return (
		<Modal animationType='fade' hardwareAccelerated onRequestClose={() => setHomeModalVisible(false)} transparent visible={homeModalVisible}>
			<View style={extraStyles.modal}>
				<View style={extraStyles.modalDialog}>
					<View style={[styles.shadow, extraStyles.modalContent]}>
						{city &&
							category &&
							(add ? (
								<>
									<View style={extraStyles.modalHeader}>
										<MaterialIcons
											style={extraStyles.modalClose}
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
										<Text color='white' style={extraStyles.modalHeaderText}>
											Choose which travel(s) you want to add the {singularize(category)} to or press the back button to go back
										</Text>
									</View>
									<View style={extraStyles.modalBody}>
										<Text color='blue' style={extraStyles.modalHeaderText}>
											Your existing travels to {capitalize(city)}
										</Text>
										<FlatList
											data={travels.filter(item => item.city === city)}
											keyExtractor={item => item.name}
											renderItem={({ item, index }) => (
												<Card color={colorize(index + 1)}>
													<View style={[styles.row, extraStyles.modalCardContainer]}>
														<View style={extraStyles.modalBodyTextContainer}>
															<Text color={colorize(index)} style={extraStyles.modalBodyTitleText}>
																{item.name}
															</Text>
															<Text color={colorize(index)} style={extraStyles.modalBodyText}>
																{item[category].length}{' '}
																{category === 'activities' ? `thing${item[category].length !== 1 && 's'} to do` : item[category].length !== 1 ? category : category.substring(0, category.length - 1)}
															</Text>
															{item[category].includes(name) && (
																<Text color='red' style={extraStyles.modalBodyText}>
																	{item.name} already has the {category === 'activities' ? 'thing to do' : category.substring(0, category.length - 1)}.
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
													title='save'
													color='green'
													icon='save'
													onPress={() =>
														Alert.alert('Saving changes', 'Are you sure you want to save all the changes?', [
															{ text: 'Cancel', style: 'cancel' },
															{
																text: 'OK',
																style: 'default',
																onPress: () => {
																	setTravels(travels.map(item => (chosen.includes(item.name) ? { ...item, [category]: [...item[category], name] } : item)));
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
									<View style={extraStyles.modalHeader}>
										<MaterialIcons style={extraStyles.modalClose} name='cancel' size={24} color={colors.white} onPress={() => setHomeModalVisible(false)} />
										<Text color='white' style={extraStyles.modalHeaderText}>
											Press + at the end of each {singularize(category)} to add it to your travel(s) or press the close button to cancel
										</Text>
									</View>
									<View style={extraStyles.modalBody}>
										<Text color='blue' style={extraStyles.modalHeaderText}>
											{category === 'activities' ? 'Things to do' : capitalize(category)} in {capitalize(city)}
										</Text>
										<FlatList
											data={db[city][category]}
											keyExtractor={item => item.name}
											renderItem={({ item, index }) => (
												<Card color={colorize(index + 1)}>
													<View style={[styles.row, extraStyles.modalCardContainer]}>
														<View style={extraStyles.modalBodyTextContainer}>
															<Text color={colorize(index)} style={extraStyles.modalBodyTitleText}>
																{item.name}
															</Text>
															<View style={styles.row}>
																{item.stars && [...Array(Number(item.stars))].map((value, i) => <MaterialIcons key={i} name='star' size={12} color={index % 2 === 0 ? colors.white : colors.gray} />)}
																<Text color={colorize(index)} style={extraStyles.modalBodyText}>
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
	modalBody: {
		flex: 1,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	modalCardContainer: {
		alignItems: 'center',
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
