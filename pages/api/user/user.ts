import type { NextApiRequest, NextApiResponse } from 'next'
import  { data }  from './users'
import {articles} from './article'
interface User {
    id: string;
    password: string;
}

export default function handler( req: NextApiRequest, res: NextApiResponse){

  // res.status(200).json({id: "1", password: "2"});
  res.status(200).json(data);

}