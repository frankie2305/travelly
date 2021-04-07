import React, { createContext, useCallback, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [homeModalVisible, setHomeModalVisibleState] = useState(false);

	const setHomeModalVisible = useCallback(visible => setHomeModalVisibleState(visible), [homeModalVisible]);

	const [addTravelModalVisible, setAddTravelModalVisibleState] = useState(false);

	const setAddTravelModalVisible = useCallback(visible => setAddTravelModalVisibleState(visible), [addTravelModalVisible]);

	const [addItemModalVisible, setAddItemModalVisibleState] = useState(false);

	const setAddItemModalVisible = useCallback(visible => setAddItemModalVisibleState(visible), [addItemModalVisible]);

	return (
		<ModalContext.Provider
			value={{
				homeModalVisible,
				setHomeModalVisible,
				addTravelModalVisible,
				setAddTravelModalVisible,
				addItemModalVisible,
				setAddItemModalVisible,
			}}>
			{children}
		</ModalContext.Provider>
	);
};
