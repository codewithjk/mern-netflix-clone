import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()
  return (
    <div className='z-10  bg-black w-full sm:h-24 h-16 bg-opacity-80 '>
       <div className=' h-full flex flex-row items-center '>
            <img className='object-contain w-auto h-full ' src={logo} alt="logo" />
            {/* <button className=' bg-red-600 h-8 rounded p-1 text-white font-bold end-6 ' onClick={()=>navigate(props.login?"/login":"/signup")}>{props.login?"Log in":"Sign up"}</button> */}
        </div>
    </div>
  )
}

export default Header