import Product from "@/app/components/Product";

async function generateStaticParams(){
    let res=await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data=await res.json();
    console.log(data)
    return data.products.map((product)=>(
        {
            id:product.id.toString
        }
    ))
}

async function getProduct(id){
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const data=await res.json();
    console.log(data)
    return data;
}


export default async function page({params}) {
    // product me dynamic route create krna h
    console.log(params)
    const product=await getProduct(params.id)
    console.log(product)

  return (
    <div>
     <Product title={product.title} price={product.price}/>
    </div>
  )
}
