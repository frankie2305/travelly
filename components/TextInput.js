import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Text from './Text';

export default CustomTextInput = ({ touched, errors, ...props }) => (
	<>
		<TextInput style={styles.textInput} {...props} />
		<Text
			color='red'
			style={{ textAlign: 'center', marginTop: 10, marginBottom: 20 }}>
			{touched && errors}
		</Text>
	</>
);

const styles = StyleSheet.create({
	textInput: {
		borderColor: 'gainsboro',
		borderRadius: 10,
		borderWidth: 1,
		fontFamily: 'roboto-regular',
		fontSize: 20,
		padding: 10,
		textAlign: 'center',
	},
});
