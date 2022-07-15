import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'


type ProductsProps = {
  products: any[];
}






// chạy client
const ProductPage = ({products}: ProductsProps) => {
  console.log('Product page client');
  console.log('products', products);
  if(!products) return null
  
  
  return (
    <div>{products.map((item) => (
      <div key={item._id}><Link href={`/products/${item._id}`}>{item.name}</Link> </div>
    ))}</div>
  )
}


//chạy server
// export const getStaticProps: GetStaticProps<ProductsProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   console.log('Get static props - server');
//   const data = await (await fetch(`http://localhost:8008/api/products`)).json()
//   console.log('data', data);
//   if(!data) return {
//     notFound: true
//   }
//   return {
//     props: {
//       products: data
//     }
//   }
  
// }
export default ProductPage