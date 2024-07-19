
// if we want ,our component would render on client side then we use this link on top of component

'use client'
// import Exampleclient from './components/Exampleclient'
import Image from "next/image";
import styles from './page.module.css'
// import Example from './Example'

export default function Home() {
  function example(){
    alert("hhhii")

 
  }
  // function handleChange(e){
  //   console.log(e.target.value)

  // }
 
  return (
    <main className={styles.main}>
      
      {/* <Example/> */}
    {/* <Exampleclient/> */}





{/* <button onClick={example}> please click</button> */}
{/* <input type="text" placeholder="pls write something" onChange={handleChange}/> */}





    
    </main>
  );
}
