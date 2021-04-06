import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../constants';

export default CheckBox = ({
	checked = false,
	checkedColor = 'green',
	checkedIcon = 'check-box',
	disabled = false,
	disabledColor = 'red',
	disabledIcon = 'cancel-presentation',
	onPress,
	uncheckedColor = 'black',
	uncheckedIcon = 'check-box-outline-blank',
}) =>
	disabled ? (
		<MaterialIcons name={disabledIcon} size={24} color={colors[disabledColor]} />
	) : checked ? (
		<MaterialIcons name={checkedIcon} size={24} color={colors[checkedColor]} onPress={onPress} />
	) : (
		<MaterialIcons name={uncheckedIcon} size={24} color={colors[uncheckedColor]} onPress={onPress} />
	);
