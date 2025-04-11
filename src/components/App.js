import React, { useState } from 'react';
import NavBar from '/src/components/NavBar/NavBar';
import SideBar from '/src/components/SideBar/SideBar';
import PropertiesBar from '/src/components/PropertiesBar/PropertiesBar';
import Canvas from '/src/components/Canvas/Canvas';

import { PropertyContextProvider } from '/src/context/PropertyContext';
import { SavingPhotoContextProvider } from '/src/context/SavingPhotoContext';
import './App.css';

const App = () => {
	// const [savingPhoto, setSavingPhoto] = useState(false);

	// const handleSavePhoto = (state) => {
	// 	setSavingPhoto(state);
	// };

	return (
		<div className="main-wrapper">
      <SavingPhotoContextProvider>
        <NavBar />
        <Canvas />
      </SavingPhotoContextProvider>

			<PropertyContextProvider>
				<SideBar />
				<PropertiesBar />
			</PropertyContextProvider>
		</div>
	);
};

export default App;
