import React, { useState } from "react";
import Lottie from "lottie-react";
import regmi from "/src/assets/animations/register.json";
import {useNavigate} from "react-router-dom";
import { useAuth } from "/src/store/auth";
import { toast } from 'react-toastify';

const Signup = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
  //  console.log(e)
  let name = e.target.name;
  let value = e.target.value;

  setuser({
    ...user,
    [name]:value,
  })
  }

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const Handlesubmit = async (e) =>{
    e.preventDefault();
    // alert("Registration Successfull")
    // console.log(user);
    try {
      
      const response = await fetch(`https://codemon-i5f0.onrender.com/api/auth/register`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
      })
      // console.log(response)
      const res_data = await response.json();
      console.log("res from server", res_data);
      if(response.ok){
        storeTokenInLS(res_data.token);
        setuser({username: "",email: "",phone: "",password: "",})
        toast.success("New Friend 🎇😊")
        navigate("/")
      }
      else{
        if (res_data.errors && res_data.errors.length > 0) {
          const firstError = res_data.errors[0].msg;
          toast.error(firstError);
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    }
  } catch (error) {
    console.error("Error during registration:", error);
    // Handle the error as needed, such as displaying a general error message to the user
    alert("An error occurred during registration. Please try again later.");
  }
}

  return (
    <div>
      <section>
        <main>
          <div className="section-registration h-screen">
            <div className="container grid grid-cols-2">
              <div className="registration-image">
             <Lottie animationData={regmi} className="h-[80%]"/>
              </div>
              <div className="registration-form h-[60vh] rounded-lg w-[40vw] text-white mt-[9%] right-[5%]">
                <h1 className="main-heading mb-3 text-center mt-[5%] text-3xl text-white">REGISTER</h1>
                <br />
                <form onSubmit={Handlesubmit} className=" text-white mt-20">
                {errors.length > 0 && (
                    <div className="alert alert-danger">
                      {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                      ))}
                    </div>
                  )}
                  <div className=" text-white ml-[25%]">
                    <label htmlFor="username" className=" text-white text-xl">Username</label>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className="ml-9 text-white  border-b-4 border-blue-300 mb-3 w-[15vw] outline-none "
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className=" text-white ml-[25%]">
                    <label htmlFor="email" className=" text-white text-xl">Email</label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      className=" text-white ml-[17.2%] border-b-4 border-blue-300 mb-3 w-[15vw]"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className=" text-white ml-[25%]">
                    <label htmlFor="phone" className=" text-white text-xl">Phone</label>
                    <input
                      type="number"
                      placeholder="Enter phone"
                      className=" text-white ml-[16%] border-b-4 border-blue-300 mb-3 w-[15vw]"
                      name="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className=" text-white ml-[25%]">
                    <label htmlFor="password" className=" text-white text-xl">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className=" text-white ml-11 border-b-4 border-blue-300 mb-3 w-[15vw]"
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn text-xl btn-submit ml-[26%] pt-2 pb-2 rounded-3xl mt-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white pl-[20%] pr-[20%]">
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Signup;
