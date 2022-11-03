import React from 'react'

const Login3 = () => {
  return (
    <div className='w-full h-screen bg-orange-300 md:bg-gray-500'>
        <div className='flex relative mx-3 top-20 md:left-20 md:h-4/5 md:w-2/6 bg-white rounded-lg shadow-md shadow-slate-500'>
        <form className='flex flex-col justify-evenly px-10 my-10 w-full'>
            <label htmlFor="login" className='text-2xl'>Login</label>
            <p className='text-gray-500'>Doesn't have an account yet? 
                <span className='underline '>Sign Up</span>
            </p>
            <label htmlFor="email" className='mb-2 mt-5'>Email Address</label>
            <input 
            type="text"
            placeholder='you@example.com'
            className='border-2 border-gray-400 rounded-md h-10 pl-5 focus:pl-0' 
            />
            <div className='flex justify-between mt-3 mb-2'>
            <label htmlFor="password">Password</label>
            <p>Forgot Password?</p>
            </div>
            <input 
            type="password"
            placeholder='Enter & character or more'
            className='border-2 border-gray-400 rounded-md h-10 pl-5 focus:pl-0' 
            />
            <div className='flex flex-row my-3'>
                <input 
                type="checkbox" />
                <label htmlFor="rememberMe" className='mx-2'>Remeberme</label>
            </div>
            <button className='w-full h-10 rounded-md border-2 bg-purple-500'>LOGIN</button>
            <div className='grid grid-cols-3 mt-5 content-center'>
                <div 
                className='self-center pr-3'>
                    <hr className=' bg-red-500'/> 
                </div>
                <div className='flex justify-center'>
                    <span>Or login with</span>
                </div>
                <div className='self-center pl-3'>
                    <hr className=' bg-red-500'/> 
                </div>
            </div>
            <div className='flex flex-row justify-evenly gap-x-2 mt-3'>
                <button className='border-2 border-red-400 w-full h-10 rounded-md'> Google</button>
                <button className='border-2 border-blue-400 w-full h-10 rounded-md'> Facebook</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login3
