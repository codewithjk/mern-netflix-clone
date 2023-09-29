import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formValues,setFormValues]= useState({
    name:"",
    password:""
  });
  const handleLogin = async()=>{
    
    try {
      const {email,password} = formValues;
      await signInWithEmailAndPassword(firebaseAuth,email,password);

    } catch (error) {
      console.log(error);
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  })
  return (
    <div className='w-full h-full bg-[url(./assets/banner.jpg)] bg-center bg-cover text-white'>
      <Header/>
      <div className="bg-opacity-50 bg-black flex items-center justify-center p-4 w-full ">
      <div className=' p-10 bg-black sm:w-1/3 w-full rounded  flex flex-col gap-5 justify-center '>
        <h1 className=' text-4xl font-bold'>Sign In</h1>
        <div className=" grid gap-4">
          <input className=' h-12 text-black rounded p-4  bg-zinc-500' type="text" placeholder='Email address' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value })}/>
          <input className=' h-12 text-black rounded p-4  bg-zinc-500' type="password" placeholder='Password' name='password' value={formValues.password}  onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}/>
        </div>
        <button onClick={handleLogin} className=' h-12 rounded p-4 bg-red-600  font-bold'>Sign In</button>
      </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Login