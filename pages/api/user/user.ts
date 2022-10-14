import type { NextApiRequest, NextApiResponse } from 'next'
import  { data }  from './users'

export default function handler( req: NextApiRequest, res: NextApiResponse){

  // res.status(200).json({id: "1", password: "2"});
  if(req.method === 'GET'){
    res.status(200).json(data);
  }else if(req.method === 'POST'){
    console.log(req);
    
    const email = req.body.email;
    const password = req.body.password
    const newUser = {
      id: email,
      password: password,
    }

    data.push(newUser);

    res.status(201).json(newUser)
  }

}