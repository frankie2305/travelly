import React, { createContext, useCallback, useState } from 'react';
import { db } from '../constants';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUserState] = useState({ username: '', password: '' });

	const setUser = useCallback(currentUser => setUserState(currentUser), [
		user,
	]);

	const [travels, setTravelsState] = useState([
		{
			name: 'Sydney Test',
			city: 'sydney',
			restaurants: [db.sydney.restaurants[0]],
			hotels: [db.sydney.hotels[0]],
			attractions: [db.sydney.attractions[0]],
			activities: [db.sydney.activities[0]],
		},
		{
			name: 'Melbourne Test',
			city: 'melbourne',
			restaurants: [db.melbourne.restaurants[0]],
			hotels: [db.melbourne.hotels[0]],
			attractions: [db.melbourne.attractions[0]],
			activities: [db.melbourne.activities[0]],
		},
	]);

	const setTravels = useCallback(
		currentTravels => setTravelsState(currentTravels),
		[travels]
	);

	return (
		<UserContext.Provider value={{ user, setUser, travels, setTravels }}>
			{children}
		</UserContext.Provider>
	);
};
