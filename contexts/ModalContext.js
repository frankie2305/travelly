import React, { createContext, useCallback, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [homeModalVisible, setHomeModalVisibleState] = useState(false);

	const setHomeModalVisible = useCallback(
		visible => setHomeModalVisibleState(visible),
		[homeModalVisible]
	);

	return (
		<ModalContext.Provider
			value={{ homeModalVisible, setHomeModalVisible }}>
			{children}
		</ModalContext.Provider>
	);
};
