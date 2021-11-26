import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetailsById } from '../store/slices/products'

const ProductDetails = () => {
  const {id} = useParams()
  const product = useSelector(state => state.products.productDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductDetailsById(id))
  }, [])

  return (
    <>
      {
        product && (
          <div className="m-5 p-20 rounded shadow-xl">
            <h3 className="text-4xl font-bold">{product.title}</h3>
            <div className="flex mt-10">
              <img src={product.image} className="w-96"/>
              <div className="p-20 m-10 bg-gray-100">
                <p className="text-xl">{product.description}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ProductDetails
