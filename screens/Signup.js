import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import * as yup from 'yup';
import { Button, Form, Screen, Text, TextInput } from '../components';
import { styles } from '../constants';

const validationSchema = yup.object({
	username: yup.string().trim().required().min(8).max(20).label('Username'),
	password: yup.string().trim().required().min(8).max(20).label('Password'),
	confirmPassword: yup
		.string()
		.trim()
		.required()
		.oneOf([null, yup.ref('password')], 'Passwords must match')
		.label('Password confirmation'),
});

export default Signup = ({ navigation }) => (
	<Screen style={styles.center}>
		<Text color='blue' style={[styles.title, extraStyles.title]}>
			Signup Form
		</Text>
		<Form
			initialValues={{ username: '', password: '', confirmPassword: '' }}
			validationSchema={validationSchema}
			onSubmit={({ username, password }, { resetForm }) => {
				resetForm();
				username = username.trim();
				password = password.trim();
				SecureStore.getItemAsync('users').then(value => {
					let users;
					if (value) {
						users = JSON.parse(value);
						if (users.find(user => user.username === username)) {
							Alert.alert(
								'Oops!',
								'User already exists. Please log in instead.'
							);
							return;
						}
					} else {
						users = [];
					}
					users.push({ username, password });
					SecureStore.setItemAsync(
						'users',
						JSON.stringify(users)
					).then(() => {
						navigation.navigate('Login');
						Alert.alert(
							'Ta-da!',
							'Your account has been successfully created. You can now log in.'
						);
					});
				});
			}}>
			{({
				values,
				handleChange,
				handleBlur,
				touched,
				errors,
				handleSubmit,
				resetForm,
			}) => (
				<>
					<TextInput
						autoCapitalize='none'
						autoFocus
						placeholder='Username'
						value={values.username}
						onChangeText={handleChange('username')}
						onBlur={handleBlur('username')}
						touched={touched.username}
						errors={errors.username}
					/>
					<TextInput
						secureTextEntry
						placeholder='Password'
						value={values.password}
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						touched={touched.password}
						errors={errors.password}
					/>
					<TextInput
						secureTextEntry
						placeholder='Confirm password'
						value={values.confirmPassword}
						onChangeText={handleChange('confirmPassword')}
						onBlur={handleBlur('confirmPassword')}
						touched={touched.confirmPassword}
						errors={errors.confirmPassword}
					/>
					<Button
						icon='person-add'
						title='Sign up'
						onPress={handleSubmit}
					/>
					<View style={[styles.row, styles.center]}>
						<Text color='gray' style={extraStyles.text}>
							Already have an account?{' '}
						</Text>
						<TouchableOpacity
							onPress={() => {
								resetForm();
								navigation.navigate('Login');
							}}>
							<Text color='cyan' style={extraStyles.text}>
								Log in
							</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</Form>
	</Screen>
);

const extraStyles = StyleSheet.create({
	title: {
		marginBottom: Constants.statusBarHeight,
	},
	text: {
		marginTop: 10,
	},
});
