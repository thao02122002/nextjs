import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  const router = useRouter()
  const id = router.query.id
  console.log(router.query);
  
  return (
    <div>ProductDetail id: {id}</div>
  )
}

export default ProductDetail