import {mount} from 'cart/CartIndex';
import React, {useRef, useEffect} from 'react'

const CartApp = () => {
	const ref = useRef(null)
	useEffect(() => {
		mount(ref.current)
	})
	return (
		<div ref={ref}/>
	)
}

export default CartApp
