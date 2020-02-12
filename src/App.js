import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './components/Splash/';
import Home from './components/Home/';

import Redirect from './components/Redirect';


import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/'>
				<Splash />
			</Route>
			<Route path='/redirect'>
				<Redirect />
			</Route>
			<Route path='/home'>
				<Home />
			</Route>
		</div>
	);
}

export default App;


