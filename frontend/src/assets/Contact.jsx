import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import contact from "/src/assets/animations/contact.json";
import submit from "/src/assets/animations/submit.json";
import { useAuth } from "../store/auth";

const DefaultContactForm = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [showSubmitAnimation, setShowSubmitAnimation] = useState(false);
  const [button, setButton] = useState(false);
  // const [user, setuser] = useState(DefaultContactForm);
  const { user } = useAuth(); // Access user data from AuthProvider

  const [contactData, setContactData] = useState(DefaultContactForm);

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContactData({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleButtonClick = (e) => {
    // alert("message sent successfully")
    // e.preventDefault();
    // console.log(user);
    setButton(!button);
    setShowSubmitAnimation(!showSubmitAnimation);
  };

  useEffect(() => {
    let intervalId;
    if (button) {
      const btn = document.getElementById("btn");
      btn.style.backgroundColor = "lightgreen";
      intervalId = setInterval(() => {
        btn.style.backgroundColor = ""; // Reset to original color (empty string means default)
        setButton(false);
      }, 1900);
    }

    return () => {
      clearInterval(intervalId); // Cleanup interval when component unmounts or before re-run
    };
  }, [button]);

  useEffect(() => {
    if (showSubmitAnimation) {
      setTimeout(() => {
        setShowSubmitAnimation(false);
      }, 1800);
    }
    return () => {
      clearTimeout();
    };
  }, [showSubmitAnimation]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://codemon-i5f0.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      console.log("response from frontend ", response);

      if (response.ok) {
        setContactData(DefaultContactForm);
        const data = await response.json();
        console.log("contact form data", data);
        // alert("Data sent successfully");
      }
    } catch (error) {
      alert("error from frontend");
      console.log(error);
    }
  };
  return (
    <div>
      <div className="first-screen grid grid-cols-2">
        <div className="first">
          <Lottie
            animationData={contact}
            className="h-[70%] rounded-full mt-20"
          />
        </div>
        <div className="second">
          <center>
            <h1 className="underline mt-20 mb-20">CONTACT US</h1>
          </center>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">
                <h2>USERNAME</h2>
              </label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={contactData.username}
                className="bg-white text-black p-1 mb-[3%]"
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">
                <h2>EMAIL</h2>
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className="bg-white text-black p-1 mb-[3%]"
                value={contactData.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="message">
                <h2>MESSAGE</h2>
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                className="bg-white text-black p-2 mt-[1%]"
                autoComplete="off"
                value={contactData.message}
                onChange={handleInput}
                required
                cols="50"
                rows="5"
              ></textarea>
            </div>

            <div className="mt-[6%]">
              <button
              id="btn"
                type="submit"
                className="bg-red-600 text-black pl-3 pr-3 pt-1 pb-1 rounded-md font-semibold"
                onClick={handleButtonClick}
              >
                submit
              </button>
              {showSubmitAnimation ? (
                <Lottie animationData={submit} className=" h-[10%] w-[15%] ml-[10%] -mt-[10%]"/>
              ):
              ""}
            </div>
          </form>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105445.35482742745!2d80.84792755741249!3d26.87244939953532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712648118451!5m2!1sen!2sin"
        className="w-screen h-96"
      ></iframe>
    </div>
  );
};

export default Contact;
