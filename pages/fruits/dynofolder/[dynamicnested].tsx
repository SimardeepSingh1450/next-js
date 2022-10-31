import { useRouter } from "next/router"

export default function DynamicNested(){
    
    const router=useRouter()

    console.log(router);

    function takeMeHome(){
        // router.push('/')
        router.replace('/')
    }

    return <>
    <h1>dynamicNested {router.query.dynamicnested}</h1>
    <button onClick={takeMeHome}>Home</button>
    </>
}