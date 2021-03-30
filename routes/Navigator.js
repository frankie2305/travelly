import React, { useContext } from 'react';
import { AuthContext } from '../contexts';
import { Home } from '../screens';
import AuthStack from './AuthStack';

const Navigator = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return isLoggedIn ? <Home /> : <AuthStack />;
};

export default Navigator;
