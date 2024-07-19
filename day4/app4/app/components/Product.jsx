import React from 'react'

export default function Product(props) {
    console.log(props)
  return (
    <div style={{border:"1px solid white", margin:"10px"}}>
        <h4>
            {props.title}
        </h4>
        <h4>
            {props.price}
        </h4>

    
    </div>
  )
}
