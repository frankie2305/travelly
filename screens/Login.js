import React, { useContext } from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store';
import { AuthContext, UserContext } from '../contexts';
import { Button, Form, Screen, Text, TextInput } from '../components';
import { styles } from '../constants';

const validationSchema = yup.object({
	username: yup.string().required().min(8).max(20).label('Username'),
	password: yup.string().required().min(8).max(20).label('Password'),
});

export default Login = ({ navigation }) => {
	const { login } = useContext(AuthContext);
	const { setUser } = useContext(UserContext);

	return (
		<Screen style={styles.center}>
			<Text color='blue' style={[styles.title, { marginBottom: 30 }]}>
				Login Form
			</Text>
			<Form
				initialValues={{ username: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={({ username, password }, { resetForm }) => {
					resetForm();
					SecureStore.getItemAsync('users').then(value => {
						let users = JSON.parse(value);
						if (
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
							onPress={handleSubmit}
							icon='login'
							title='Log in'
						/>
						<View style={[styles.row, styles.center]}>
							<Text color='gray' style={{ marginTop: 10 }}>
								Don't have an account?{' '}
							</Text>
							<TouchableOpacity
								onPress={() => {
									resetForm();
									navigation.navigate('Signup');
								}}>
								<Text color='cyan' style={{ marginTop: 10 }}>
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
