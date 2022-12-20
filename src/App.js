import { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { Route, useLocation, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'



function App() {
	const [characters, setCharacters] = useState([]);
	const location = useLocation()


	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					setCharacters(oldChars => [...oldChars, data]);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	}


	const onClose = event => {
		setCharacters(
			characters.filter(char => char.id !== Number(event.target.id))
		);
	};

	return (
		<div className='App' style={{ padding: '25px' }}>

			{location.pathname === '/' ? <Form /> : null}
			{location.pathname === '/' ? null : <Nav onSearch={onSearch} />}
			
				<Routes >

					<Route path='/home'
						element={<Home characters={characters} onClose={onClose} />}

					>
					</Route>

					<Route exact path='/detail/:detailId' element={<Detail />} />


					<Route path="/about" element={<About />} />
					<Route path="/favorites" element={<Favorites />} />


				</Routes>

			



		</div>
	);
}

export default App;
