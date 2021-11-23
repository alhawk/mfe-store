import {mount} from 'products/ProductsIndex';
import React, {useRef, useEffect} from 'react'

const ProductApp = () => {
	const ref = useRef(null)
	useEffect(() => {
		mount(ref.current)
	})
	return (
		<div ref={ref}/>
	)
}

export default ProductApp
