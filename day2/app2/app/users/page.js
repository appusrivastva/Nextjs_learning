import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link";

export default async function Users() {
  const userData=await getAllUsers();
  const users=await userData
  console.log(users)

  return (
    <div>
         {
          users.map((user)=>
          (
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>
              {user.name}
              </Link>

            </p>
          )
          )
         }
      
    </div>
  )
}
