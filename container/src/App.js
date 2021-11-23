import React from 'react'
import CartApp from './components/CartApp'
import ProductApp from './components/ProductApp'

function App() {
	return (
		<div>
			<div className="text-4xl font-black bg-blue-500 text-white p-6">Container! Navigation should be here</div>
			<ProductApp/>
			<CartApp/>

			{/* <div id="dev-products"></div> */}
			<div id="dev-cart"></div>

		</div>
	)
}

export default App
