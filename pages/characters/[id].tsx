import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout';
import { Character, GetCharacterResults } from '../../types';

function CharacterPage({character}: {character: Character}) {
    const router = useRouter();
    console.log(router.query);
    
  return (
    <div>
        <h1>Character Page</h1>

        <h2>{character.name}</h2>
        <Image 
        unoptimized
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
        />

    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async(context) => {

  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
  const character = await res.json();

  return {
    props: {
        character,
    }
  }

}


export default CharacterPage;