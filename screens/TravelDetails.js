import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import { Screen, Text } from '../components';
import { styles } from '../constants';

export default TravelDetails = ({ route }) => {
	const { name } = route.params;
	const { travels } = useContext(UserContext);
	const item = travels.find(travel => travel.name === name);
	console.log(item);

	return (
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
};
