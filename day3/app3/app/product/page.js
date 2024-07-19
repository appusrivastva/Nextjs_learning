import React from 'react'
import Productbtn from './Productbtn';
// data fetch krne ke liye async fuction banana pdega
async function productList(){
    let res=await fetch("https://dummyjson.com/products")

    let data=await res.json();
    return data.products;
}
export default async function Product() {

    let products=await productList();
    console.log(products)
    

  return (
    // server side rendering and fetch data
    <div>
        <h1>product list</h1>
        {
            products.map((i)=>(
                <div>
                    <h2>{i.title}</h2>
                    <Productbtn price={i.price}/>
                 </div>
            
            ))
         
        }
        
      
    </div>
  )
}
