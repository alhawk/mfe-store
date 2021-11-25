import {mount} from 'cart/CartIndex';
import React, {useRef, useEffect} from 'react'

const CartApp = () => {
	const ref = useRef(null)
	useEffect(() => {
		mount(ref.current, {
			onNavigate: () => {
				console.log('container cart')
			}
		})
	})
	return (
		<div ref={ref}/>
	)
}

export default CartApp
