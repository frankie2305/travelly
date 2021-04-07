import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../constants';

export default renderStars = (number, size, color) =>
	[...Array(Number(number))].map((value, i) => (
		<MaterialIcons key={i} name='star' size={size} color={colors[color]} />
	));
