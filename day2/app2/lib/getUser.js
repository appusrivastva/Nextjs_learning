import React from 'react'

export default async function getUser(id) {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{next:{revalidate:60}})
    console.log(res)

    if(!res.ok) throw new Error('failed to fetch data')
       

  return res.json();

}
