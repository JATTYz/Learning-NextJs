import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import im from '../public/image1.jpg';
type userLogin = {
    email : string,
    password : string,
}

const Login4 = () => {

  const [values ,setValue] = useState<userLogin>({
    email: "",
    password: ""
  })
  
  const [remember, setRemember] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...values, [e.target.name] : e.target.value});
  }

  const handleRemember = () =>{
    setRemember(!remember);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/user/user',{
        email: values.email,
        password: values.password
    }).then((res) => {
        alert("SUCCESSFULLY REGISTERED");
        console.log(res);
    }).catch((e) => {
        alert(e);
    });
    console.log(values.email);
    console.log(values.password);
    console.log(remember);
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='w-full h-screen hidden md:grid'>
            <Image
            src={im}
            alt="background-image"
            layout="responsive"
            />
        </div>
        <div className=' h-screen w-full mx-auto px-16'>
        <div className='flex flex-col h-full max-w-[600px]'>
        <div className='flex flex-row justify-end'>
            <p className='text-custom-blue'>LoGo Dotra.</p>
        </div>
            <div className='mt-10'>
                <h1 className='text-3xl font-bold'>Hi, Welcome back!</h1>
                <p>Login now to manage your job made easy.</p>
            </div>
            <div className='flex flex-row justify-between gap-4 mt-7'>
                <button className='border w-1/2 h-16 rounded-md'>Sign in with Google</button>
                <button className='border w-1/2 h-16 rounded-md bg-blue-600 text-white'>Sign in with Facebook</button>
            </div>
            <div className='grid grid-cols-3 mt-4'>
                <div className='self-center pr-4'>
                    <hr />
                </div>
                <div className='text-center'>
                    <p>or</p>
                </div>
                <div className='self-center pr-4'>
                    <hr />
                </div>
            </div>

            <form className='mt-5' onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input 
                type="text" 
                className='w-full border rounded-md h-10 pl-4 focus:pl-0 my-2'
                placeholder='&#xF002; hrd@dotra.co'
                name={"email"}
                onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className='w-full border rounded-md h-10 pl-4 focus:pl-0 my-2'
                placeholder='Enter your password'
                name={"password"}
                onChange={handleChange}
                />
                <div className='flex flex-row justify-between mt-3'>
                    <div className='flex flex-row'>
                        <input 
                        type="checkbox" 
                        className='mr-3'
                        onChange={handleRemember}
                        />
                        <p>Remember me</p>
                    </div>
                    <p>Forget password?</p>
                </div>
                <button
                className='w-full h-10 border rounded-md bg-orange-600 mt-5'
                >Sign in</button>
            </form>
            <p className='text-center mt-5'>Not registered yet? <span>Create an Account</span></p>
            <p className='h-full flex items-end justify-center'>2021 Dotra. All right</p>
        </div>
        </div>
    </div>
  )
}

export default Login4