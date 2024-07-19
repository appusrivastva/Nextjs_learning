import Link from "next/link";

export default function page({params}) {
    let a=params.user;
  return (
    <div>
         <h1>
            Your Hobbies
        </h1>
    

    <ul>
        
         <Link href={`../${a}/hobbies/dance`}>
         Dance
        </Link>
        <br />
         <Link href={`../${a}/hobbies/coding`}>
         coding
        </Link>
    </ul>
    </div>
  )
}
