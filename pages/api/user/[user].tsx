import  { data }  from './users'
import { articles } from './article';
import { GetServerSideProps } from 'next';
import {User} from '../../../utype';
import React from 'react';
import { useRouter } from 'next/router';
// export default function handler({query: { id }}, res){

//         console.log("GKLDSJFKLSDJ");
        
//     const filtered = data.filter(article => (
//         article.id == id
//     ))
        
//     if(filtered.length > 0){
//         res.status(200).json(filtered[0]);
//     }else{
//         console.log(filtered);
//         // res.status(404).json({message: "No data"})
//     }
//   res.status(200).json({id: "1", password: "2"});
//   res.status(200).json({users});

// }

function Char({users}){
    const router = useRouter();
    console.log(router.query);
    
  return (
    <div>
        <h1>Character Page</h1>

        <h2>{users.id}</h2>
    </div>
  )
}
export default Char

export const getServerSideProps: GetServerSideProps = async(context) => {

  const res = await fetch(`http://localhost:3000/api/user/${context.query.id}`);
  const users = await res.json();

  return {
    props: {
        users,
    }
  }

}

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