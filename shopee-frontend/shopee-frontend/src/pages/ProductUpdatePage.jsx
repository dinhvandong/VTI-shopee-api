import React from 'react'
import { useParams } from 'react-router-dom'
import ProductUpdate from '../components/ProductUpdate';

const ProductUpdatePage = () => {

  const { id } = useParams();

  return (
    <div>

      <ProductUpdate productId={id} />

    </div>
  )
}

export default ProductUpdatePage