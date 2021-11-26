import React, { Suspense } from 'react'
const ProductApp = React.lazy(() => import("../apps/ProductApp"));

const Products = () => {
  return (
    <div>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <ProductApp/> 
      </Suspense>
    </div>
  )
}

export default Products
