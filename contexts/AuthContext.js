import React, { createContext, useCallback, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(() => setIsLoggedIn(true), [isLoggedIn]);

	const logout = useCallback(() => setIsLoggedIn(false), [isLoggedIn]);

	return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};
