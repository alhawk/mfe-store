import React from 'react'
import CartApp from './components/CartApp'
import ProductApp from './components/ProductApp'

function App() {
	return (
		<div>
			<h1>Container</h1>
			<ProductApp/>
			<CartApp/>

			{/* <div id="dev-products"></div> */}
			<div id="dev-cart"></div>

		</div>
	)
}

export default App
