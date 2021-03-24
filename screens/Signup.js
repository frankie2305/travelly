import React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { Button, Form, Screen, Text, TextInput } from '../components';
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store';

const validationSchema = yup.object({
	username: yup.string().required().min(8).max(20).label('Username'),
	password: yup.string().required().min(8).max(20).label('Password'),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([null, yup.ref('password')], 'Passwords must match')
		.label('Password confirmation'),
});

export default Signup = ({ navigation }) => (
	<Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
		<Text
			color='blue'
			style={{
				fontFamily: 'roboto-black',
				fontSize: 30,
				marginBottom: 30,
				textTransform: 'uppercase',
			}}>
			Signup Form
		</Text>
		<Form
			initialValues={{ username: '', password: '', confirmPassword: '' }}
			validationSchema={validationSchema}
			onSubmit={({ username, password }, { resetForm }) => {
				resetForm();
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
						Alert.alert(
							'Ta-da!',
							'Your account has been successfully created. You will now proceed to the login screen.',
							[
								{
									text: 'OK',
									onPress: () => navigation.navigate('Login'),
									style: 'cancel',
								},
							]
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
						onPress={handleSubmit}
						icon='person-add'
						title='Signup'
					/>
					<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
						<Text color='gray' style={{ marginTop: 10 }}>
							Already have an account?{' '}
						</Text>
						<TouchableOpacity
							onPress={() => {
								resetForm();
								navigation.navigate('Login');
							}}>
							<Text color='cyan' style={{ marginTop: 10 }}>
								Log in
							</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</Form>
	</Screen>
);
