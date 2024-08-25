import React from 'react'
import Lottie from "lottie-react";
import error from "/src/assets/animations/404.json";
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className='relative'>
      <Lottie animationData={error} className='h-[80vh] w-screen border mt-4'/>
      <h2 className='absolute  ml-[40%]  -mt-28 text-3xl font-bold'>The Page is NOT Found</h2>
      <NavLink to='/' className='absolute  ml-[40%]  -mt-9 border-black bg-blue-300 border-2 text-black pl-4 pr-4 pt-1 pb-1 font-bold rounded-lg'>Home</NavLink>
      <NavLink to='/contact' className='absolute  ml-[50%]  -mt-9 border-black bg-blue-300 border-2 text-black pl-4 pr-4 pt-1 pb-1 font-bold rounded-lg'>Report a Problem</NavLink>
      
    </div>
  )
}

export default Error
