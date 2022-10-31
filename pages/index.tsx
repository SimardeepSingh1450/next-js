//styled-JSX

// function Heading(props){
//   const variables=Math.random()>0.5 ? 'red':"blue"
//   return <div><h1>{props.heading}</h1>
//      <style jsx global>
//       {
//         `
//         h1 {
//           color:${variables};
//         }`
//       }
//      </style>
//   </div>
// }




// import styles from './index.module.css'
// function Heading(props){
//   const variables=Math.random()>0.5 ? 'red':"blue"
//   return <div>
//     <h1 className={styles.red}>{props.heading}</h1>
//   </div>
// }

// export default function Home() {
//   return (
//     <div>
//     <Heading heading="Heading"/>
//     <h1>Here is black if not global</h1>
//     </div>
//   )
// }






// import { useEffect, useState } from "react";
// import jwt from 'jsonwebtoken'
// import { json } from "stream/consumers";


// export default function Home(){

//   const [username,setUsername]=useState<string>('')
//   const [password,setPassword]=useState<string>('')
//   const [message,setMessage]=useState<string>('You are not logged In')

//   async function submitForm(){
//     const res=await fetch('/api/login',{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({username,password})
//     }).then((t)=>t.json())

//     const token=res.token

//     if(token){
//       const json=jwt.decode(token) as {[key:string]:string}
//       console.log(json)
//       setMessage(`Welcome ${json.Username} and you are ${json.admin ? 'An Admin':'Not An Admin'}`)
//       console.log(message)
//     }else{
//       setMessage('Something went wrong')
//       console.log(message)

//     }
//   }



//   return(
//     <div>
//       <h1>{message}</h1>
//       <form method="POST" action="/api/login">
//         <input type="text" name="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
//         <input type="password" name="Pass" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//         <input type="submit" value="Login" onClick={submitForm}/>

//       </form>
//     </div>
//   )
// }




//Link component :
// import Link from 'next/link'
// export default function Home() {
//   return (
//     <div>
//     <h1><Link href="/simar">Go to simar.tsx</Link></h1>
//     </div>
//   )
// }



//Nested Routing :
//index.ts in another folder is used for nested routing and acts as basic homepage
import Link from 'next/link'
export default function Home() {
  return (
    <div>
    <h1><Link href="/page1/page1new">Go to Page1 New file</Link></h1>
    </div>
  )
}