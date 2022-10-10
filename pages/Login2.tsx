import React, { useState } from 'react'

const Login2 = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }
  
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    
    // loginwiht ++++++

  }

  return (
    <div className='grid md:grid-cols-2 w-full h-screen'>
        <div className='bg-white flex items-center justify-center'>
            <form className='container mx-10 flex flex-col items-center'>
            <label className='text-4xl font-semibold my-3'>Sign in</label>
            <input 
            className='bg-slate-200 my-3 h-10 w-3/4' 
            type="text" 
            placeholder='hello@gmail.com'
            value={email}
            onChange={handleEmail}
            />
            <input 
            className='bg-slate-200 my-3 h-10 w-3/4'
            type="password"
            placeholder='password'
            value={password}
            onChange={handlePassword}
            />

            <label className='text-slate-400 hover:cursor-pointer'>Forgot you password?</label>
            <button 
            className='bg-orange-400 my-3 text-white w-2/6 h-10 rounded-full'
            onClick={handleSubmit}>
                SING IN
            </button>
            </form>
        </div>
        <div className='bg-gradient-to-r from-red-400 to-red-500 hidden md:flex  flex-col items-center justify-center'>
            <h1 className='text-5xl  font-semibold text-white'>Hello, Friend!</h1>
            <p className='text-white text-xl my-7'>Enter your personal details and <br/> 
            start journey with us
            </p>
            <button className='border-2 border-white  text-white w-2/6 h-10 rounded-full'>SING UP</button>
        </div>
    </div>
  )
}

export default Login2