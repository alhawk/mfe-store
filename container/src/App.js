import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import CartApp from './apps/CartApp'
import Events from './pages/Events'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
 
const App = () => {
	return (
		<>
			<div className="text-4xl font-black bg-blue-500 text-white p-6">Container! Navigation should be here</div>
			<BrowserRouter>
			<div className="flex">
				<div className="bg-red-700 text-white text-lg font-semibold py-3 px-4 mr-1"><Link to='/'>HOME</Link> </div>
				<div className="bg-red-700 text-white text-lg font-semibold py-3 px-4 mr-1"><Link to='/products'>PRODUCTS</Link> </div>
				<div className="bg-red-700 text-white text-lg font-semibold py-3 px-4 mr-1"><Link to='/deals'>BEST OFFERS</Link> </div>
				<div className="bg-red-700 text-white text-lg font-semibold py-3 px-4"><Link to='/cart'>MY CART</Link> </div>
			</div>
					<Switch>
						<Route path='/deals' component={Events}/>
						<Route path='/cart' component={CartApp}/>
						<Route path='/products/:id' component={ProductDetails}/>
						<Route path='/products' component={Products}/>
						<Route exact path='/' component={Home}/>
						<Route exact path='*' component={NotFound}/>
					</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
