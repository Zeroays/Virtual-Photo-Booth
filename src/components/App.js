import React from 'react';
import { PropertyContextProvider } from '/src/context/PropertyContext';
import { SavingPhotoContextProvider } from '/src/context/SavingPhotoContext';

import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';
import PropertiesBar from './PropertiesBar/PropertiesBar';
import Canvas from './Canvas/Canvas';

import './App.css';

const App = () => {
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
