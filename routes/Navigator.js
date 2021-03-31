import React, { useContext } from 'react';
import { AuthContext } from '../contexts';
import AuthStack from './AuthStack';
import Drawer from './Drawer';

const Navigator = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return isLoggedIn ? <Drawer /> : <AuthStack />;
};

export default Navigator;
