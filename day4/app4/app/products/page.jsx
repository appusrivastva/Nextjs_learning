import Product from "../components/Product";
import Button from "../components/Button";
async function getProduct(){
    let res=await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data=await res.json();
    console.log(data)
    return data.products;
}



export default async function products() {
    let products=await getProduct();
    console.log(products)
  return (
    <div>
   <h1>products</h1>

   {
    products.length>0 && (
        products.map(({id,title,price})=>(
            <>
            <Product key={id} price={price} title={title}/>
            <Button id={id}/>
            </>
        
        )
        

        )
    )
   }
    </div>
  )
}
