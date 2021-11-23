import React, { useEffect, useState } from 'react'

const Products = () => {
	const [products, setProducts] = useState([])
	
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	}, [])

	return (
		<div>
			{
				products.map(el => {
					return (
						<div key={el.id}>
							<h3>{el.title}</h3>
							<img src={el.image}/>
							<p>{el.description}</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default Products
