import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({location}) => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  // console.log(params, 'params')
  // console.log(location, "<<<<<<<")
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
			.then(res => res.json())
			.then(json => setProduct(json))
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
                {/* <p>{JSON.stringify(product)}</p> */}
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ProductDetails
