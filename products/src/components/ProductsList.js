import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getProducts } from '../store/slices/products'

const ProductsList = () => {
	const history = useHistory()
	const products = useSelector(state => state.products.all) 
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(getProducts())
	}, [])

	return (
		<div className="m-6 pt-3 rounded-lg shadow-2xl">
			<h2 className="text-3xl font-extrabold m-5">Our Products</h2>
			<div className="grid grid-cols-6 gap-3 p-6">
				{
					products.map(el => {
						return (
							<div key={el.id} className="p-3 rounded shadow-md">
								<div><img src={el.image} className="w-100"/></div>
								<h3 className="text-lg font-bold text-gray-800 my-3">{el.title}</h3>
								<div className="py-3 border-t-2 border-b-2 border-dashed flex justify-between">
									<span className="font-medium"><strong>$</strong>  {el.price}</span>
									<span className="cursor-pointer py-1 px-2 bg-red-300" onClick={() => history.push(`/products/${el.id}`)}>See Details</span>
								</div>
								<div className="py-3"><p>{el.description}</p></div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default ProductsList
