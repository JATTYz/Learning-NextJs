import axios from 'axios'
import React, { useState } from 'react'


type userLogin = {
    email : string,
    password : string,
}

const Login2 = () => {

  const [values ,setValue] = useState<userLogin>({
    email: "",
    password: ""
  })

  const [remember, setRemember] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...values, [e.target.name] : e.target.value});
  }
  const handleRemember = () => {
    setRemember(!remember);
  }
  
  // const test =  (() => {
  //   axios.get("http://localhost:3000/api/user/user").then((res) => {
  //   console.log(res.data);
  //   });
  // })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values.email);
    console.log(values.password);
    console.log(remember);
    

    // axios.post(`http://localhost:3000/api/user/${values.email}`).then((res) => {
    // axios.post(`http://localhost:3000/api/user/${values.email}`, {
    //   email: values.email,
    //   password: values.password
    // }).then((res) => {
    
    // if(values.password == res.data.password){
    //   alert("SUCCESSFULLY LOGIN");
    // }else{
    //   alert("WRONG PASSWORD");
    // }
    // console.log(res);
    // }).catch(e => alert(e));
    
  }

  return (
    <div className='grid md:grid-cols-2 w-full h-screen font-ubuntu'>
        <div className='bg-white flex items-center justify-center'>
            <form 
            className='container mx-10 flex flex-col items-center'
            onSubmit={handleSubmit}
            >
            <label className='text-4xl font-semibold my-3 '>Sign in</label>
            <input 
            className='bg-slate-200 my-3 h-10 w-3/4' 
            type="text" 
            placeholder='hello@gmail.com'
            value={values.email}
            name={"email"}
            onChange={handleChange}
            />
            <input 
            className='bg-slate-200 my-3 h-10 w-3/4'
            type="password"
            placeholder='password'
            value={values.password}
            name={"password"}
            onChange={handleChange}
            />

            <input 
            className='bg-slate-200 my-3 h-10 w-3/4'
            type="checkbox"
            onChange={handleRemember}
            />
            <label 
            className='text-slate-400 hover:cursor-pointer'
            // onClick={test}
            >Forgot you password?</label>
            <button 
            className='bg-orange-400 my-3 text-white w-2/6 h-10 rounded-full'
            >
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