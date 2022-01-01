import React from 'react';
import Navbar from './components/Navbar.js';
import OptionsBox from './components/OptionsContainer.js'

export const App = () => (
	<div className="App">
		<header className="App-header">
			<Navbar></Navbar>
			<OptionsBox></OptionsBox>
		</header>
	</div>
);
