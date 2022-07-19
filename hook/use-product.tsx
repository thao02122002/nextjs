import React from 'react'
import useSWR from 'swr'
import { add, removeItem ,updateItem} from '../api/product'


const useProducts = () => {
  const {data, error, mutate} = useSWR('/products') 

  //create
  const create = async (item: any) => {
       const product = await add(item)
       mutate([...data, product])
  }

  const remove = async (id:any) => {
     await removeItem(id)
    const newProducts = data.filter((item: any) => item.id != id);
    mutate(newProducts)
  }


  const update = async (product: any) => {
    await updateItem(product)
    const newProducts = data.map((item: any) => item.id === data.id ? product : item)
    mutate(newProducts)
  }

  return{
    data,
    error,
    create,
    remove,
    update
  }
}

export default useProducts