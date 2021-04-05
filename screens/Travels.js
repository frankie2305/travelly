import React from 'react';
import { Screen, Text } from '../components';
import { styles } from '../constants';

export default Travels = () => (
	<Screen style={styles.center}>
		<Text
			color='blue'
			style={{
				fontFamily: 'roboto-black',
				fontSize: 30,
				textTransform: 'uppercase',
			}}>
			Travels
		</Text>
	</Screen>
);
