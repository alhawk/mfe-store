import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import Events from './pages/Events'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import ProductsPage from './pages/ProductsPage'
import './style.css'

const App = ({history}) => {
	const {location} = history
	return (
		<Router history={history}>
			<Switch>
				<Route path='/deals' component={Events}/>
				{/* <Route path='/products/:id' render={(props) => <ProductDetails {...props} location={location}/>}/> */}
				<Route path='/products/:id' component={ProductDetails}/>
				<Route path='/products' component={ProductsPage}/>
				<Route exact path='/' component={Home}/>
			</Switch>
		</Router>
	)
}

export default App
