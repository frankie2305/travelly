import React from 'react';
import { Alert } from 'react-native';
import { Button, Form, Screen, Text, TextInput } from '../components';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = yup.object({
	username: yup.string().required().min(8).max(20).label('Username'),
	password: yup.string().required().min(8).max(20).label('Password'),
});

export default Login = () => (
	<Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
		<Text
			color='blue'
			style={{
				fontFamily: 'roboto-black',
				fontSize: 30,
				marginBottom: 30,
				textTransform: 'uppercase',
			}}>
			Login Form
		</Text>
		<Form
			initialValues={{ username: '', password: '' }}
			validationSchema={validationSchema}
			onSubmit={({ username, password }, { resetForm }) => {
				resetForm();
				AsyncStorage.getItem('users').then(value => {
					let users = JSON.parse(value);
					if (
						users.find(
							user =>
								user.username === username &&
								user.password === password
						)
					) {
						console.log('Login');
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
			}) => (
				<>
					<TextInput
						autoCapitalize='none'
						autoFocus={true}
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
					<Button onPress={handleSubmit} icon='login' title='Login' />
				</>
			)}
		</Form>
	</Screen>
);
