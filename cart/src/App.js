import React from 'react'
import faker from 'faker'

function App() {
	return (
		<div className="text-4xl font-black bg-blue-500 text-white p-6">You have {faker.random.number()} items in your cart</div>
	)
}

export default App
