import React from 'react';
import { Alert } from 'react-native';
import { Button, Form, Screen, Text, TextInput } from '../components';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = yup.object({
	username: yup.string().required().min(8).max(20).label('Username'),
	password: yup.string().required().min(8).max(20).label('Password'),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([null, yup.ref('password')], 'Passwords must match')
		.label('Password confirmation'),
});

export default Signup = () => (
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
				AsyncStorage.getItem('users').then(value => {
					let users;
					if (value) {
						users = JSON.parse(value);
						if (users.find(user => user.username === username)) {
							Alert.alert(
								'Oops!',
								'User already exists. Please login instead.'
							);
							return;
						}
					} else {
						users = [];
					}
					users.push({ username, password });
					AsyncStorage.setItem(
						'users',
						JSON.stringify(users)
					).then(() => console.log('Signup'));
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
						icon='group-add'
						title='Signup'
					/>
				</>
			)}
		</Form>
	</Screen>
);
