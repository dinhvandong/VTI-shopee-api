import React, { useEffect, useState } from 'react'
import ProductAPI from '../apis/api_product';
import ProductList from '../components/ProductList';

const ProductsPage = () => {

    const [data, setData] = useState([]);

    // data la bien dung de read
    // setData la dung de write to data 
    // giong nhu get va set trong lap trinh Java 


   
  return (
    <div className='w-full h-auto flex flex-col'>
        <ProductList/>

    </div>
  )
}

export default ProductsPage