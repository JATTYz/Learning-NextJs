import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Login = () => {
  
  const [email, setEmail] = useState("");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }
  
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
    
  }

  return (
    <div className='flex flex-row h-screen '>
        
        <div className='bg-black basis-full md:basis-3/5 flex flex-row justify-center items-center'>
            <div className=' bg-white sm:w-3/5 sm:h-2/4 flex rounded-lg sha'>
                <div className=' flex-col mx-10 my-10 z-10 '>
                    <h1 className='text-2xl'>Welcome</h1>
                    <h1 className='text-2xl'>Back</h1>
                    <input 
                    className='border-2 mt-6 w-full' 
                    type="text"
                    placeholder='Email'
                    value = {email}
                    onChange={handleEmail}
                    />
                    <input 
                    className='border-2 w-full my-3' 
                    type="password"
                    placeholder='Password'
                    />
                    <p className='text-xs'>Forget your password?</p>
                    <button className='flex w-full justify-center items-center my-3 border-2 bg-yellow-400 border-black' onClick={handleSubmit}>Login<AiOutlineArrowRight className='mx-3'/></button>
                    <p className='text-xs mt-10 flex justify-center'>Have not registered with ous?<button className='font-bold mx-2'>Sign up</button></p>
                </div>

            </div>
        </div>
        <div className='bg-lime-500 md:basis-2/5'>
        </div>
    </div>
  )
}

export default Login
