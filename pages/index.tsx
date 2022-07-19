
import Link from 'next/link';
import useProducts from '../hook/use-product'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { data: products, error, remove, update } = useProducts()
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
                <Link href={`/products/edit/${item.id}`}><button onClick={() => update({id:17, name: "product 17"})}>Update</button></Link>
                
                </div>
                )
              })
            }
            <Link href={`/products/add`} >
            {/* <button onClick={() => create({ id: 1, name: "Product 1" })}>Create</button> */}
            <button>Create</button>
            </Link>
      

    </div>
    
  )
}

export default Home
