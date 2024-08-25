import React, { useState } from 'react'
import Lottie from "lottie-react";
import compani from "/src/assets/animations/computer.json";
import {motion} from "framer-motion";
import course1 from "/src/assets/animations/course1.json";
import course2 from "/src/assets/animations/course2.json";
import course3 from "/src/assets/animations/course3.json";
import wave from "/src/assets/animations/wave.json";
import { NavLink } from 'react-router-dom';
import Design from '/src/assets/Design'
import Streak from '../HOME-ASSESTS/Streak';
// import chatapp from "../chatapp/MERN-SocialMedia-ZAINKEEPSCODE-master/client/src/App.js";

const Home = () => {
  
  const [showDesign, setShowDesign] = useState(false);

  const handleExploreMoreClick = () => {
    setShowDesign(true);
  };
  return (
    
      <div className="container">
         {showDesign ? (
        <Design />
      ) : " "}
          <div className="subset  text-white grid grid-cols-2 ">
            <div className="first  text-center  h-[60%]">
              <h1 className='mt-[25%] -ml-[35%] text-5xl'>WELCOME,</h1>
              <p className='ml-16 text-3xl'>To <span className='text-blue-500  font-serif'> CODEMON</span></p>
              <p className='mt-[13%]  text-xl -ml-[20%] font-mono'>your first stage to coding begin from here</p>
              <button className='bg-blue-400  p-2 mt-[3%] mr-[20%] -ml-[50%] font-[inconsolata] overflow-auto rounded-tl-3xl rounded-br-3xl' >JOIN US</button>
              <button className='bg-pink-400 -mr-[30%] p-2 font-[inconsolata] rounded-tl-3xl rounded-br-3xl overflow-ellipsis'>EXPLORE MORE</button>
            </div>
            <div className="second ">
             <Lottie animationData={compani} className='mt-3 h-[110%] w-[120%] -ml-[21%]'/>
            </div>
          </div>
            <marquee behavior="scroll" direction="right"><h1 className='text-3xl p-3 font-mono mt-[5%] text-red-400 relative'>😎Best animated website which will teach you coding from the very beggining level😊</h1></marquee>
          <div className="next-page relative mt-[12%] h-[90%] text-white">
            {/* <div className="streak h-24 w-[25%] right-[9%] absolute  -mt-[8%]">
              <Streak/>
            </div> */}
            <div className="courses grid grid-cols-3">
              <div className="pehla -mt-[40%] relative">
                <Lottie animationData={course1} className='h-[90%] w-[29vw] '/>
                <div className="card1 relative w-[23vw] -mt-[44%] ml-4 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
                  <p className='bg-transparent mb-16'>
                    A web-development course
                    will help you to <br/>
                     create
                    your career in tech 
                    industry.
                    it <br/>
                  <a href="" className='p-2 mt-8 absolute pr-2 pl-2 rounded-xl bg-blue-600 border w-full'>Know more</a>
                  </p>
                </div>
              </div>
              <div className="dusra">
            <Lottie animationData={course2} className='h-[34%]   mt-[20%] w-[29vw]'/>
            <div className="card2 relative w-[18vw] ml-16 mt-[15%] rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-red-500 p-4">
             <p className='bg-transparent mb-14'>
              A programming course will help you <br/> to learn basics of everything you required <br/>to get in tech industry. it is the first step <br/> of computer science student.
             <a href=""  className='p-2 mt-8 absolute pr-2 pl-2 rounded-xl bg-black-600 w-full border -ml-[76%]'>Explore</a>
             </p>
            </div>
              </div>
              <div className="teesra">
         <Lottie animationData={course3} className='h-[50%]  mt-[7%] w-[23vw]'/>
         <div className="card3 relative mt-[4%] w-[24vw] rounded-lg bg-gradient-to-r from-blue-400 via-red-500 to-yellow-500 p-4" >
          <p className='bg-transparent mb-16'>
            A design course will teach you <br/> how you build your product and after <br/>build how catch it is. it will teach you <br/> to use your creativity.
            <button onClick={handleExploreMoreClick}   className='p-2 mt-8 absolute pr-2 pl-2 rounded-xl bg-green-600 border w-full -ml-[41%]'>Explore us</button>
          </p>
         </div>
              </div>
              <div className="third-page w-screen">
               <Lottie animationData={wave} className=''/>
              </div>
            </div>
          </div>
      </div> 
  )
}

export default Home
