import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUserState] = useState({ username: '', password: '' });

	const setUser = useCallback(currentUser => setUserState(currentUser), [
		user,
	]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
