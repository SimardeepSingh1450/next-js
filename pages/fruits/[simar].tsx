import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

//This fn executes on server :
export const getStaticProps:GetStaticProps=async (context) =>{

    //From getStaticPaths here using -> context.params , we can fetch url params and send them as props from here

    return {
        // revalidate:10,  //revalidate is used in production for refreshing the data in page
        props :{
            myFavNum:Math.floor(Math.random()*10)
        }
    }
}

//getStaticProps runs at BUILD TIME . It does NOT RUN AT RUNTIME hence it works fine for static files i.e files without [].tsx
//We need to use getStaticPaths for [].tsx/dynamic files so as to tell when getStaticProps fn will run
//Here in the below GetStaticPaths:
//localhost:3000/fruits/hello -> take the output -> store it on the disk
//localhost:3000/fruits/world -> take the output -> store it on the disk
//DONE

//So what happens is once the user visited the localhost:3000/fruits/asdasafasf -> data was initially stored on the disk
//after again revisiting the same url just the stored output file is sent

export const getStaticPaths:GetStaticPaths=async ()=>{
    return {
        //Putted simar here in params since dynamic file name is [simar].tsx
        paths : [{params:{simar:"hello"}},{params:{simar:"world"}}],
        // fallback:false //fallback false means only these paths:[] would be permissible
        fallback:true//means the page is not going to wait for getStaticProps to run or it is not going to wait for props to fill
    }
}

export default function Simar(props){
    const router=useRouter()

    console.log(router)

    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return <>
    <h1>Fruit simar </h1>
    <h2>{props.myFavNum}</h2>
    </>
}

//Dynamic routing : used [].tsx

//localhost:3000/fruit/ahskashdkjhas
//localhost:3000/fruit/ahskashdkqwieuhqwiuhe
