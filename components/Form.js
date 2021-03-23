import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';

export default Form = ({
	children,
	initialValues,
	validationSchema,
	onSubmit,
}) => (
	<View style={styles.form}>
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{children}
		</Formik>
	</View>
);

const styles = StyleSheet.create({
	form: {
		width: '85%',
	},
});
