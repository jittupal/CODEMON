import React, { useState } from 'react'
import streani from "../assets/animations/streak.json"
import Lottie from 'lottie-react'

const Streak = () => {

  const [color, setColor] = useState('red');

  const handleClick = () => {
    const dot = document.getElementById("dot");
    dot.style.backgroundColor = "lightgreen";
  };

  return (
    <div className='flex'>
      
      <Lottie animationData={streani} className='h-[40px] w-[40px] mt-[61px]'/>
      <div className='content text-center w-[350px] font-semibold rounded-md'>
        <h1 className=' '>All the best for your success</h1>
        <h1 className=' '>You are on the right path, keep it up</h1>
      <div className='flex list-none gap-5 ml-4 mt-3 text-black'>
        
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>M</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>T</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>W</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>T</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>F</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>S</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>
        <div className=''>
        <li className=' bg-orange-500 text-black h-[25px] w-[25px] rounded-full'>S</li>
        <h1 id='dot'  onClick={handleClick} className='h-[25px] w-[25px] bg-red-600 rounded-full mt-2 dot'></h1>
        </div>

      </div>
      
      </div>
    </div>
  )
}

export default Streak
