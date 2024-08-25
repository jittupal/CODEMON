import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import logni from "/src/assets/animations/login.json";
import {useNavigate} from "react-router-dom";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Login = () => {
  
  
  const [user, setuser] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState([]);

  const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value

    setuser({
      ...user,
      [name]:value,
    });
  };



 const navigate = useNavigate();
 const {storeTokenInLS} = useAuth();

  const Hdleansubmit= async (e) =>{
   e.preventDefault();
   try {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const res_data = await response.json();
    if (response.ok) {
      storeTokenInLS(res_data.token);
      setuser({ email: '', password: '' });
      toast.success("Welcome Back 🙏🏻")
      navigate('/');
    } else {
      if (res_data.errors && res_data.errors.length > 0) {
        const firstError = res_data.errors[0].msg;
        toast.error(firstError);
    } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login. Please try again later.');
  }
};
  

  const [button, setButton] = useState(false);

  const handleButtonClick = (e) => {
    setButton(!button);

  };

  useEffect(() => {
    let intervalId;
    if (button) {
      const btn = document.getElementById("btn");
      btn.style.backgroundColor = "lightgreen";
      intervalId = setInterval(() => {
        btn.style.backgroundColor = ""; // Reset to original color (empty string means default)
        setButton(false);
      }, 1800);
    }

    return () => {
      clearInterval(intervalId); // Cleanup interval when component unmounts or before re-run
    };
  }, [button]);

  return (
    <div>
    <section>
      <main>
        <div className="section-registration h-[90vh]">
          <div className="container grid grid-cols-2">
            <div className="registration-image ">
           <Lottie animationData={logni} className='h-[60%] mt-[10%]'/>
            </div>
            <div className="registration-form text-center h-[50vh] ml-28 border-2 mt-[5%] top-[27%] left-[50%] bg-white rounded-xl w-[26%] bottom-[50%] right-[5%] absolute  mr-16 text-black">
              <h1 className="main-heading mb-3 mt-[14%] text-3xl  bg-white text-black font-[serif]">LOGIN</h1>
              <br />
              <form onSubmit={Hdleansubmit} className='bg-white text-black'>
                <div className='bg-white text-black'>
                  <label htmlFor="email" className='bg-white text-black font-bold'>Email</label>
                  <input
                  className='ml-10 bg-white text-black border-2 border-black rounded-lg p-3'
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className='bg-white text-black'>
                  <label htmlFor="password" className='bg-white text-black font-bold'>Password</label>
                  <input
                  className='ml-3 bg-white text-black mt-3 border-2 border-black rounded-lg p-3'
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" id="btn" onClick={handleButtonClick} className="btn btn-submit bg-red-400 font-bold  text-black pl-32 pr-32 pt-2 pb-2 mt-5">
                  SUBMIT
                </button>
                {errors.length > 0 && (
                    <div className="alert alert-danger">
                      {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                      ))}
                    </div>
                  )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
  )
}

export default Login
