import Image from 'next/image'
import React from 'react'

const Responsive = () => {
  return (
    <img 
    src = "/vercel.svg"
    className='w-30 sm:w-16 md:w-64 lg:w-4 h-14'
    alt='Image'
    />
  )
}

export default Responsive