import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import useProducts from '../../hook/use-product'

type Inputs = {
  name: string
}

const Edit = () => {
  const {update} = useProducts()
  const {register, handleSubmit, formState: {errors}, reset} = useForm<Inputs>()
  
  return (
    <div>Edit</div>
  )
}

export default Edit