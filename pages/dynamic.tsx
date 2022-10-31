// import { GetStaticProps } from "next"
// import path from "path"

import { GetServerSideProps } from "next";

// //This fn executes on server :
// export const getStaticProps:GetStaticProps=async context =>{
//     const fs=require('fs')

//     const txt=fs.readFileSync(path.join(process.cwd(),'public/robots.txt'),'utf8')
//     return {
//         // revalidate:10,  //revalidate is used in production for refreshing the data in page
//         props :{
//             myFavNum:Math.floor(Math.random()*10),
//             robotfile:txt
//         }
//     }
// }

// export default function Dynamic(props){
//     return <>
//     <h1>Dynamic Number - {props.myFavNum}</h1>
//     <br/>
//     <h1>Robots.txt file content is :</h1>
//     <h4>{props.robotfile}</h4>
//     </>
// }


//EXECUTION ON SERVER :
//getServerSideProps is called on every single page and everytime in production 
//This means we are calling server on every request thus making the request slower
//This we use only when we need a Page with continous calls/refresh
//If possible avoid using this
export const getServerSideProps:GetServerSideProps=async (context)=>{
return {
    props:{
        myFavNum:Math.random()
    }
}
}

export default function Dynamic(props){
    return <h1>Dynamic Number - {props.myFavNum}</h1>
}