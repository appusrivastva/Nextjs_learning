"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [product,setProduct]=useState([])



  useEffect(()=>{
    const fetchData=async ()=>{
   try{
     
      let res=await fetch('https://dummyjson.com/products')
      let data=await res.json();
      console.log(data)
      setProduct(data.products)
     
   

     
  }
  catch(err){
    console.log(err)
   }
  }
  fetchData();

},[])

  return (
    <div >
<h1>Product List</h1>
{product.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}


    </div>
  );
}
