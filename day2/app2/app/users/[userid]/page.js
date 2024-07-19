import getUser from '@/lib/getUser'
import getAllUsers from '@/lib/getAllUsers'

export async function generateStaticParams(){

    const userData=await getAllUsers();
    const users=await userData
    console.log(users)
    return users.map(user=>(
        {
            userId:user.id.toString()
        }
    ))
}

export default async function User({params}) {
    console.log(params)
    const userData=getUser(params.userid);
    const user=await userData;
    console.log(user)
  return (
    <div>
        <h2>
            {user.name}
        </h2>
      
    </div>
  )
}
