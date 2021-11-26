import React, { Suspense } from 'react'
import ProductApp from '../apps/ProductApp'

const ProductDetails = () => {
  return (
    <div>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <ProductApp/> 
      </Suspense>
    </div>
  )
}

export default ProductDetails
