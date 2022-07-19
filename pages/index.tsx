
import useProducts from '../hook/use-product'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { data: products, error, create, remove, update } = useProducts()
  console.log(products);
// 

 
  if(!products) return < div>Loading...</div>
  
  if(error) return <div>fail to load</div>
  


  return (
  
      <div className={styles.container}>
            {
              products && products.map((item: any,index: any)=>{
                return (<div key={index}>{item.name}
                <button onClick={() => remove(item.id)}>Delete</button>
                <button onClick={() => update({id:15, name: "product update15"})}>Update</button>
                </div>
                )
              })
            }
      <button onClick={() => create({ id: 17, name: "Product 17" })}>Create</button>

    </div>
    
  )
}

export default Home
