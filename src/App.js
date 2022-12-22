import { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import NotFound from './components/NotFound/NotFound';
import { Route, useLocation, Routes, useNavigate } from 'react-router-dom'



function App() {
	const [characters, setCharacters] = useState([]);
	const location = useLocation()

	// busca mi id que le pase por mi buscador
	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					for (let character of characters) {
						if (data.id === character.id) {
							return window.alert('Ya tienes ese personaje, intenta de nuevo');
						}
					}
					setCharacters(oldChars => [...oldChars, data]);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	}

	// cirra las tarjetas de mi home
	const onClose = event => {
		setCharacters(
			characters.filter(char => char.id !== Number(event.target.id))
		);
	};
	//crea un personaje al azar
	const handleRandom = () => {

		function random() {
		  let num = Math.floor((Math.random() * 826));
		  return num
		}
		return onSearch(random())
	  }

	  //aceso permitido
	  const navigate = useNavigate();
	  const [access, setAccess] = useState(false);
	  const username = 'ejemplo@gmail.com';
	  const password = '1password';
	
	  function login(userData) {
	   if (userData.password === password && userData.username === username) {
		  setAccess(true);
		  navigate('/home');
	   }
	   }
	  //la ruta no puede ser diferente a ('/') hasta que el acces sea true
	  useEffect(() => {
		!access && navigate('/');
	 }, [access, navigate]);

	const logout = () => {
		setAccess(false);
		navigate('/');
	}

	return (
		<div className='App' style={{ padding: '25px' }}>

			{location.pathname === '/' ? <Form login={login} /> : null}

			{location.pathname === '/' ? null : <Nav onSearch={onSearch}
			 handleRandom={handleRandom}
			 logout={logout}
			 />}
			
				<Routes >

					<Route path='/home'
						element={<Home characters={characters} onClose={onClose} />} />
					
					<Route exact path='/detail/:detailId' element={<Detail />} />

					<Route path="/about" element={<About />} />

					<Route path="/favorites" element={<Favorites />} />

					<Route path='*' element={<NotFound />}/>

				</Routes>

		</div>
	);
}

export default App;
