'use client'
import React from 'react'
import ExampleServer from './ExampleServer'

export default function Exampleclient() {
    console.log("i am client")
  return (
    <div>
        <p>this is client component</p>
        <ExampleServer/>
      
    </div>
  )
}
