import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
  product:any
}

const ProductDetail = ({product}: ProductProps) => {
  

  
  return (
    <div>ProductDetail: {product.name}</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:8008/api/products`)).json()
  const paths = data.map((item: any) => {
    return { params: {_id: item._id}}
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log('Get static props');
  console.log('context', context.params?._id);

  //call api

  const data = await (await fetch(`http://localhost:8008/api/products/${context.params?._id}`)).json()
  if(!data){
    return {
      notFound: true
    }
  }
  return {
    props: {
      product: data
    }
  }
  
  
}


export default ProductDetail