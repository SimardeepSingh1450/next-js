import { NextApiRequest,NextApiResponse } from "next";
//JWT AUTH :
import jwt from 'jsonwebtoken' 

const KEY="hiudfgowgfuggwpugfeouwgfeou"

export default function randomNumber(req:NextApiRequest,res:NextApiResponse){
    console.log('REQUEST BODY :',req.body)

    if(!req.body){
        res.statusCode=404
        res.send('Error')
        return
    }

    const {Username,Pass}=req.body


    res.json({
        // message:'Details recieved at Login API ',
        // data:{
        //     name:Username,
        //     pass:Pass
        // },
        token:jwt.sign({
            Username,
            admin:Username === 'admin' && Pass === 'admin'
        },KEY)
    })
}
