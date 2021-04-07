import React from 'react';
import { TextInput } from 'react-native';
import Text from './Text';
import { styles } from '../constants';

export default CustomTextInput = ({ touched, errors, ...props }) => (
	<>
		<TextInput style={styles.textInput} {...props} />
		<Text color='red' style={[styles.textCenter, styles.textError]}>
			{touched && errors}
		</Text>
	</>
);
