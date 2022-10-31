import { useRouter } from "next/router";

//Catch all routes using [...file].tsx :
export default function MyFruit(){
    const router=useRouter()
    //We get localhost:3000/fruits/catchallroutes/asdasd/gdfgggfh/qeqeqqe
    //After catchallroutes/ we get everything in name array of router.query because of [...fileName]:
    console.log(router.query);

    return <h1>Hello from catchallroutes</h1>
}