"use client"

import { useRouter } from "next/navigation"

export default function Button({id}) {
    const router=useRouter();

    const handleClick=()=>{
        router.push(`/products/${id}`)
        

    }
  return (
    <>
        <button onClick={handleClick}>
        Go to Product
        </button>
      
    </>
  )
}
