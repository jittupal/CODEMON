import React from 'react'
import Lottie from "lottie-react";
import about from "/src/assets/animations/about.json";

const About = () => {
  return (
    <div>
     <Lottie animationData={about} className='h-[90vh]'/>
     <div className="about grid grid-cols-2">
      <div className="first text-center mt-[10%]">
        <h1 className='text-[60px] text-blue-300 font-serif'>ABOUT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas dolores cum blanditiis molestias consectetur ipsam temporibus consequuntur soluta error!
        </p>
      </div>
      <div className="second">
        <img src="/image/jittu.jpg" className='rounded-full h-[300px] right-20 absolute' alt="" />
      </div>
     </div>
     <div className="interest grid grid-cols-5 w-screen border-2 mt-[8%]">
      <div className="pehla bg-white border h-[13vh]">
      <center className='mt-[8%] text-[30px] bg-white'><h1 className='bg-transparent text-black'>WEB</h1></center>
      </div>
      <div className="dusra bg-white border h-[13vh]">
      <center className='mt-[8%] text-[30px] bg-white'><h1 className='bg-transparent text-black'>AI</h1></center>
      </div>
      <div className="teesra bg-white border h-[13vh]">
      <center className='mt-[8%] text-[30px] bg-white'><h1 className='bg-transparent text-black'>CYBER</h1></center>
      </div>
      <div className="chautha bg-white border h-[13vh]">
      <center className='mt-[8%] text-[30px] bg-white'><h1 className='bg-transparent text-black'>CLOUD</h1></center>
      </div>
      <div className="panchva bg-white border h-[13vh]">
      <center className='mt-[8%] text-[30px] bg-white'><h1 className='bg-transparent text-black'>DATA</h1></center>
      </div>
     </div>
    </div>
  )
}

export default About
