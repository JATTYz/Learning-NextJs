import  { data }  from './users'
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../utype';
import React from 'react';
import { useRouter } from 'next/router';

export default function handler({ query: { id } }: NextApiRequest, res:NextApiResponse){
        
    const filtered = data.filter(user => (
        user.id == id
    ))
        
    if(filtered.length > 0){
        res.status(200).json(filtered[0]);
    }else{
        console.log(filtered);
        res.status(404).json({message: "No data"})
    }

}


// export const getServerSideProps: GetServerSideProps = async(context) => {

//   const res = await fetch(`http://localhost:3000/api/user/${context.query.id}`);
//   const users = await res.json();

//   return {
//     props: {
//         users,
//     }
//   }

// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(`http://localhost:3000/api/user/${context.query.id}`);

//   const article = await res.json();

//   return {
//     props: {
//         article
//     }
//   }
// }

// export const getStaticPaths = async () => {

//   const res = await fetch(`${server}/api/article`);
//   const articles = await res.json();

//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({params: {id: id.toString()}})) 
//   return {
//     paths,
//     fallback: false
//   }
// }