import React from 'react'

export default function page({params}) {
    console.log(params);
  return (
    <div>
        <h1>user id:{params.user}</h1>
        <h1>user hobby:{params.hobbie}</h1>
     
      
    </div>
  )
}
