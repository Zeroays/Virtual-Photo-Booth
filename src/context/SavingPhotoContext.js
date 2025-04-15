import React, { createContext, useContext, useState } from 'react';

export const SavingPhotoContext = createContext();

export const SavingPhotoContextProvider = ({ children }) => {
	const [savingPhoto, setSavingPhoto] = useState(false);

	return (
		<SavingPhotoContext.Provider value={{ savingPhoto, setSavingPhoto }}>
			{children}
		</SavingPhotoContext.Provider>
	);
};

export const useSavingPhotoContext = () => {
	const savingPhotoContext = useContext(SavingPhotoContext);
	return savingPhotoContext;
};
