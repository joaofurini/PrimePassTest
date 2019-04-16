import React from 'react'

import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList'
import Header from './components/Header'
import Footer from './components/Footer';



const App = () => {
	

	return (
		<div className="App">
		<Header />
		<br />
		<Router basename="app">
			<Route path="/" exact={true} component={Home} />
			<Route path="/user-list" component={UserList} />
		</Router>
		<br />
		<Footer />

		</div>
	)
}

export default App
