import React, { useContext, useState } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import * as yup from 'yup';
import Constants from 'expo-constants';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext, UserContext } from '../contexts';
import Button from './Button';
import Form from './Form';
import Text from './Text';
import TextInput from './TextInput';
import Touchable from './Touchable';
import { colors, styles } from '../constants';

const validationSchema = yup.object({
	name: yup.string().required().min(8).max(20).label('Travel name'),
});

export default AddTravelModal = () => {
	const cities = [
		{ label: 'Sydney', value: 'sydney' },
		{ label: 'Melbourne', value: 'melbourne' },
	];
	const { showActionSheetWithOptions } = useActionSheet();
	const { addTravelModalVisible, setAddTravelModalVisible } = useContext(ModalContext);
	const { travels, setTravels } = useContext(UserContext);
	const [city, setCity] = useState('');

	return (
		<Modal animationType='fade' hardwareAccelerated onRequestClose={() => setAddTravelModalVisible(false)} transparent visible={addTravelModalVisible}>
			<View style={extraStyles.modal}>
				<View style={extraStyles.modalDialog}>
					<View style={[styles.shadow, extraStyles.modalContent]}>
						<View style={extraStyles.modalHeader}>
							<MaterialIcons
								style={extraStyles.modalClose}
								name='cancel'
								size={24}
								color={colors.white}
								onPress={() => {
									setCity('');
									setAddTravelModalVisible(false);
								}}
							/>
							<Text color='white' style={extraStyles.modalHeaderText}>
								New Travel Form
							</Text>
						</View>
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<View style={extraStyles.modalBody}>
								<View style={styles.center}>
									<Form
										initialValues={{ name: '' }}
										validationSchema={validationSchema}
										onSubmit={({ name }) => {
											if (travels.find(item => item.name === name)) {
												Alert.alert('Oops!', 'A travel with that name already exists. Please choose a different name');
											} else {
												setTravels([{ name, city, restaurants: [], hotels: [], attractions: [], activities: [] }, ...travels]);
												setCity('');
												setAddTravelModalVisible(false);
											}
										}}>
										{({ values, handleChange, handleBlur, touched, errors, handleSubmit }) => (
											<>
												<TextInput
													autoCapitalize='none'
													autoFocus
													placeholder='Travel name'
													value={values.name}
													onChangeText={handleChange('name')}
													onBlur={handleBlur('name')}
													touched={touched.name}
													errors={errors.name}
												/>
												<Touchable
													btn
													onPress={() =>
														showActionSheetWithOptions(
															{
																title: 'Choose a city',
																message: 'What is the very next city you want to visit?',
																options: [...cities.map(c => c.label), 'Cancel'],
																cancelButtonIndex: cities.length,
																destructiveButtonIndex: cities.findIndex(c => c.value === city),
															},
															buttonIndex => buttonIndex < cities.length && setCity(cities[buttonIndex].value)
														)
													}>
													<Text
														style={{
															borderColor: 'gainsboro',
															borderRadius: 10,
															borderWidth: 1,
															fontFamily: 'roboto-regular',
															fontSize: 20,
															padding: 10,
															textAlign: 'center',
														}}>
														{city ? cities.find(c => c.value === city).label : 'Choose a city'}
													</Text>
												</Touchable>
												<View style={{ marginTop: 50 }}>
													<Button color='green' icon='add' title='Add' onPress={city ? handleSubmit : () => Alert.alert('Oops!', 'Please choose a city first.')} />
												</View>
											</>
										)}
									</Form>
								</View>
							</View>
						</TouchableWithoutFeedback>
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
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
});
