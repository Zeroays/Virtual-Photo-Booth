import React, { createContext, useContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyContextProvider = ({ children }) => {
	const [currentProperty, setCurrentProperty] = useState('Photos');

	return (
		<PropertyContext.Provider value={{ currentProperty, setCurrentProperty }}>
			{children}
		</PropertyContext.Provider>
	);
};

export const usePropertyContext = () => {
	const propertyContext = useContext(PropertyContext);
	return propertyContext;
};
