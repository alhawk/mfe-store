import React, { Suspense } from 'react'
import CartApp from '../apps/CartApp'
// import ProductApp from '../apps/ProductApp'
const ProductApp = React.lazy(() => import("../apps/ProductApp"));

const Events = () => {
  return (
    <div>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <ProductApp/> 
      </Suspense>
      =============
      <CartApp/>
    </div>
  )
}

export default Events
