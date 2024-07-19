import React from 'react'
import Link from 'next/link'
export default function Users() {
  return (
    // dynamic routing
    <div>
        <Link href="users/1">
        <h1>user1</h1>
        </Link>
   
        <Link href="users/2">
        <h1>user2</h1>
        </Link>
   
        <Link href="users/3">
        <h1>user3</h1>
        </Link>
   
        <Link href="users/4">
        <h1>user4</h1>
        </Link>
   
   
    </div>
  )
}
