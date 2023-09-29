import React, { useState } from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import{firebaseAuth}from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'


function Signup() {
  const navigate = useNavigate()
  const [isNewuser,setIsNewuser] = useState(false)
  const [formValues,setFormValues] = useState({
    email:"",
    password:""
  })
  const handleSignin = async()=>{
    try{
      const {email,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }catch(err){
      console.log(err);
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  })

  return (
    <div className='w-[100%] h-[100vh] bg-[url(./assets/banner.jpg)] bg-center bg-cover text-white'>
      <Header login="true"/>
    
      <div className='bg-[url(./assets/banner.jpg)] bg-center bg-cover'>
      <div className=" h-full grid grid-flow-row  bg-black bg-opacity-50 w-full p-10 gap-4" >
        <div className="  flex flex-col items-left sm:items-center gap-2 sm:pt-60">
          <h1 className='font-bold text-lg  sm:text-7xl'>Unlimited Movies, TV Shows and more</h1>
          <h4>Whatch anywhere. Cancel anytime.</h4>
          <h6>Ready to watch? Enter your email to create or restart membership.</h6>
        </div>
        <div className=" flex flex-col items-center gap-2   w-full">
          <input className='w-60 sm:w-5/12 h-8 text-black p-1' type="text" placeholder='Email address' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value })}/>
          <input className={`w-60 sm:w-5/12 h-8 text-black p-1 ${isNewuser?"visible":"hidden"}`} placeholder='Password' type='password' name='password' value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})} />
          <button onClick={setIsNewuser} className={`bg-red-600 h-8 rounded p-1 text-white font-bold w-fit ${isNewuser?"hidden":""}`}>Get Started</button>
          <button onClick={handleSignin} className=' bg-red-600 h-8 rounded p-1 text-white font-bold w-fit'>Sign up</button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup