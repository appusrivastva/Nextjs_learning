
export default function page({params}) {
    console.log(params)
  return (
    <div>
        user:{
            params.user
        }
      
    </div>
  )
}
