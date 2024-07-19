"use client"

import React from 'react';

export default function Productbtn(props) {
  console.log(props)
  return (
    <div>
        <button onClick={()=>{console.log(props.price)}}>
            click me
        </button>
      
    </div>
  )
}
