import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { add } from '../../api/product'
import useProducts from '../../hook/use-product'

type Inputs = {
  name: string
}

const Add = () => {
  const {create} = useProducts()
  // const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (product) => {
    const data = await create(product)
    // navigate("/")

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name", { required: true })} />
         <button type='submit' >Create</button>
      </form>
    </div>
  )
}

export default Add