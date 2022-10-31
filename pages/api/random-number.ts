import { NextApiRequest,NextApiResponse } from "next";

export default function randomNumber(req:NextApiRequest,res:NextApiResponse){
    console.log('REQUEST BODY :',req.body)
    //status code:
    // req.statusCode=200
    //setting Headers to response:
    // res.setHeader('Set-Cookie','areyouprogrammer=true')
    res.send("Hello from Backend API")
    //Sending back JSON:
    // res.json({num:Math.floor(Math.random()*10)})

    //closing response stream :
    res.end('Hello! How are You')
}

//we can access the response at-> localhost:3000/api/random-number