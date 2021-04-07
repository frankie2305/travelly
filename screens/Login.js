import React, { useContext } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import * as yup from 'yup';
import { AuthContext, UserContext } from '../contexts';
import { Button, Form, Screen, Text, TextInput } from '../components';
import { styles } from '../constants';

const validationSchema = yup.object({
	username: yup.string().trim().required().min(8).max(20).label('Username'),
	password: yup.string().trim().required().min(8).max(20).label('Password'),
});

export default Login = ({ navigation }) => {
	const { login } = useContext(AuthContext);
	const { setUser } = useContext(UserContext);

	return (
		<Screen style={styles.center}>
			<Text color='blue' style={[styles.title, extraStyles.title]}>
				Login Form
			</Text>
			<Form
				initialValues={{ username: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={({ username, password }, { resetForm }) => {
					resetForm();
					username = username.trim();
					password = password.trim();
					SecureStore.getItemAsync('users').then(value => {
						let users = JSON.parse(value);
						if (
							users &&
							users.find(
								user =>
									user.username === username &&
									user.password === password
							)
						) {
							setUser({ username, password });
							login();
						} else {
							Alert.alert(
								'Oops!',
								'Wrong user credentials. Please try again.'
							);
						}
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
						<Button
							icon='login'
							title='Log in'
							onPress={handleSubmit}
						/>
						<View style={[styles.row, styles.center]}>
							<Text color='gray' style={extraStyles.text}>
								Don't have an account?{' '}
							</Text>
							<TouchableOpacity
								onPress={() => {
									resetForm();
									navigation.navigate('Signup');
								}}>
								<Text color='cyan' style={extraStyles.text}>
									Sign up
								</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Form>
		</Screen>
	);
};

const extraStyles = StyleSheet.create({
	title: {
		marginBottom: Constants.statusBarHeight,
	},
	text: {
		marginTop: 10,
	},
});
