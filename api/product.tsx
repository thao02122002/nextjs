import instance from "./instance"

export const add = (product: any) => {
  return instance.post( "/products",product)
}
export const updateItem = (product: any) => {
  return instance.patch(`/products/${product.id}`,product)
}
export const removeItem = (id: any) => {
  return instance.delete( `/products/${id}`)
}