import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import useProduct from '../../hook/use-product';


// type ProductsProps = {
//   products: any[];
// }






// chạy client
const ProductPage = () => {
  const { data : products, error } = useProduct();
  console.log(products.data);
  
  var data = products
    if (error) return <div>failed to load</div>;
    if(!products) return < div>Loading...</div>
    else data = products.data
  
  
  return (
    <div>
      { data & data.map((item: any) => (
            <div key={item.id}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
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