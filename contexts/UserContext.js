import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUserState] = useState({ username: '', password: '' });

	const setUser = useCallback(currentUser => setUserState(currentUser), [user]);

	const [travels, setTravelsState] = useState([
		{
			name: 'Testaroo 0',
			city: 'sydney',
			restaurants: [],
			hotels: [],
			attractions: [],
			activities: [],
		},
		{
			name: 'Testaroo 1',
			city: 'melbourne',
			restaurants: [],
			hotels: [],
			attractions: [],
			activities: [],
		},
		{
			name: 'Testaroo 2',
			city: 'sydney',
			restaurants: ['Cucina Porto'],
			hotels: ['The Fullerton Hotel Sydney'],
			attractions: ['Sydney Opera House'],
			activities: ['Chinese Garden General Admission Ticket'],
		},
		{
			name: 'Testaroo 3',
			city: 'melbourne',
			restaurants: ['Foglia di Fico'],
			hotels: ['Park Hyatt Melbourne'],
			attractions: ['Royal Botanic Gardens Victoria'],
			activities: ['Yarra Valley Wine and Winery Tour from Melbourne'],
		},
		{
			name: 'Testaroo 4',
			city: 'sydney',
			restaurants: ['Cucina Porto', 'Farmhouse Kings Cross'],
			hotels: ['The Fullerton Hotel Sydney', 'QT Sydney'],
			attractions: ['Sydney Opera House', 'Sydney Harbour Bridge'],
			activities: ['Chinese Garden General Admission Ticket', 'Sydney The Rocks Guided Walking Tour'],
		},
		{
			name: 'Testaroo 5',
			city: 'melbourne',
			restaurants: ['Foglia di Fico', 'Scopri'],
			hotels: ['Park Hyatt Melbourne', 'QT Melbourne'],
			attractions: ['Royal Botanic Gardens Victoria', 'Melbourne Cricket Ground (MCG)'],
			activities: ['Yarra Valley Wine and Winery Tour from Melbourne', 'SEA LIFE Melbourne Aquarium Admission Ticket'],
		},
		{
			name: 'Testaroo 6',
			city: 'sydney',
			restaurants: ['Cucina Porto', 'Farmhouse Kings Cross', 'Thai Pothong'],
			hotels: ['The Fullerton Hotel Sydney', 'QT Sydney', 'Sir Stamford at Circular Quay Hotel Sydney'],
			attractions: ['Sydney Opera House', 'Sydney Harbour Bridge', 'Royal Botanic Garden Sydney'],
			activities: ['Chinese Garden General Admission Ticket', 'Sydney The Rocks Guided Walking Tour', 'All Inclusive Blue Mountains Small-Group Day Trip from Sydney'],
		},
		{
			name: 'Testaroo 7',
			city: 'melbourne',
			restaurants: ['Foglia di Fico', 'Scopri', 'Da Guido La Pasta'],
			hotels: ['Park Hyatt Melbourne', 'QT Melbourne', 'Crown Towers Melbourne'],
			attractions: ['Royal Botanic Gardens Victoria', 'Melbourne Cricket Ground (MCG)', 'National Gallery of Victoria'],
			activities: ['Yarra Valley Wine and Winery Tour from Melbourne', 'SEA LIFE Melbourne Aquarium Admission Ticket', 'Spirit of Melbourne Dinner Cruise'],
		},
	]);

	const setTravels = useCallback(currentTravels => setTravelsState(currentTravels), [travels]);

	return <UserContext.Provider value={{ user, setUser, travels, setTravels }}>{children}</UserContext.Provider>;
};
