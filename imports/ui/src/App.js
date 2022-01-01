import Navbar from './components/Navbar.js';
import OptionsBox from './components/OptionsContainer.js'
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar></Navbar>
				<OptionsBox></OptionsBox>
			</header>
		</div>
	);
}

export default App;
