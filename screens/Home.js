import React from 'react';
import { Screen, Text } from '../components';
import { styles } from '../constants';

export default Home = () => (
	<Screen style={styles.center}>
		<Text
			color='blue'
			style={{
				fontFamily: 'roboto-black',
				fontSize: 30,
				marginBottom: 30,
				textTransform: 'uppercase',
			}}>
			Home
		</Text>
	</Screen>
);
