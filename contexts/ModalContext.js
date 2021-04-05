import React, { createContext, useCallback, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [modalVisible, setModalVisibleState] = useState(false);

	const setModalVisible = useCallback(
		visible => setModalVisibleState(visible),
		[modalVisible]
	);

	return (
		<ModalContext.Provider value={{ modalVisible, setModalVisible }}>
			{children}
		</ModalContext.Provider>
	);
};
