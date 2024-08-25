import React from 'react'
import { useAuth } from '../store/auth'

const Courses = () => {
  const { course } = useAuth();

  // if(!courses){
  //   console.log("error from auth file");
  // }

  // console.log('course:', course);
  return (
    <div>
      <h1 className='text-2xl font-semibold underline mt-[5%] ml-[4%]'>COURSES</h1>
      {/* <div className="course-list  grid grid-cols-4">
        {
          course.map((currElem, index) => {
            console.log('currElem:', currElem);
            // const {courses, Provider, Description, Price} = currElem;
            return (
            <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]" key={index}>

              <img src="/image/signup.png" alt="" height={200} width={200}/>
            
            
            <div className="course-details">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4]'>{currElem.provider}</p>
                  <p className='ml-12'>{currElem.price}</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase'>{currElem.course}</h2>
                <p className='text-center'>{currElem.description}</p>
            </div>
          </div>);
          })
        }
      </div> */}
      <div>
      <div className="course-list  grid grid-cols-4">
            <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/image.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>CodeHelp</p>
                  <p className='ml-12 mt-1'>3699 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2'>WEB DEVELOPMENT</h2>
                <p className='text-center'>Learn from the expert of mastering web development skills</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.codehelp.in/course/web-development-bootcamp" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1  rounded-md'>Know more</a>
            </div>
          </div>

          <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/datascience.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>GeeksforGeeks</p>
                  <p className='ml-12 mt-1'>4199 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2 text-yellow-500'>Machine learning and Data science</h2>
                <p className='text-center'>machine learning with the help of data science tools</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.geeksforgeeks.org/courses/data-science-live?source=google&medium=cpc&device=c&keyword=machine%20learning%20course&matchtype=b&campaignid=19174191348&adgroup=149462433332&gad_source=1&gclid=Cj0KCQjw0MexBhD3ARIsAEI3WHIDLVg9CSKoRHkEYyxKGlirqprA4sGSrSXDtxKhnuq7X0t2LK3OJTgaAshgEALw_wcB" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1 mb-1 rounded-md'>Know more</a>
            </div>
          </div>

          <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/datastructure.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>CodeHelp</p>
                  <p className='ml-12 mt-1'>3499 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2 text-yellow-500'>Data structure $ algorithm in C++</h2>
                <p className='text-center'>become pro in data structure and algorithm using the best approach</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.codehelp.in/course/dsa-supreme-3.0" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1 mb-1 rounded-md'>Know more</a>
            </div>
          </div>

          <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/c++.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>GeeksforGeeks</p>
                  <p className='ml-12 mt-1'>1399 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2 text-yellow-500'>Master C++ Programming Language</h2>
                <p className='text-center'>Learn the basic of c++ programming language and become expert</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.geeksforgeeks.org/courses/cpp-programming-basic-to-advanced" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1 mb-1 rounded-md'>Know more</a>
            </div>
          </div>
          <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/java.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>GeeksforGeeks</p>
                  <p className='ml-12 mt-1'>1399 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2 text-yellow-500'>Java Programming Language</h2>
                <p className='text-center'>Learn the basic of JAVA programming language and become expert</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.geeksforgeeks.org/courses/Java-Programming-basic-to-advanced" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1 mb-1 rounded-md'>Know more</a>
            </div>
          </div>

          <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/python.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>Codecademy</p>
                  <p className='ml-12 mt-1'>1599 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2 text-yellow-500'>Python Programming Language</h2>
                <p className='text-center'>Learn python with full of practical</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.codecademy.com/enrolled/courses/learn-python-3" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1 mb-1 rounded-md'>Know more</a>
            </div>
          </div>

          <div className="first border-2 ml-9 mb-6 mt-2 w-[80%]">
              <img src="/src/assets/course-images/javascript.png" alt="" height={200} width={400}/>
            <div className="course-details ">
              <div className="grid grid-cols-2 text-[15px] uppercase border-2">
              <p className='ml-2  text-[#E4E4E4] mt-1'>Coursera</p>
                  <p className='ml-12 mt-1'>2299 RUPEES</p>
                </div>
                <h2 className='text-2xl text-center font-semibold uppercase mt-2 text-yellow-500'>JAVASCRIPT MASTERY</h2>
                <p className='text-center'>Javascript course - beginner to advance</p>
            </div>
            <div className='details items-center flex justify-center'>
            <a href="https://www.coursera.org/learn/programming-with-javascript" className='bg-purple-500 mt-4 pl-2 pt-1 pr-2 pb-1 mb-1 rounded-md'>Know more</a>
            </div>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Courses
