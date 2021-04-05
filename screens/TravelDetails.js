import React from 'react';
import { Screen, Text } from '../components';
import { styles } from '../constants';

export default TravelDetails = () => (
	<Screen style={styles.center}>
		<Text
			color='blue'
			style={{
				fontFamily: 'roboto-black',
				fontSize: 30,
				textTransform: 'uppercase',
			}}>
			Travel Details
		</Text>
	</Screen>
);
