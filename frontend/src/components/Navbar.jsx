import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = () => {

   const {isLoggedIn} = useAuth();

  return (
    <header>
        <div className="container text-white">
            <a href="/" className='logo text-pink-400'>CODEMON</a>

            <nav >
                <ul className=' flex gap-10 ml-[30%] mt-12  font-serif'>
                    <li>
                        <NavLink  className="nav ml-20" to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink  className="nav"to="/contact">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" to="/courses">COURSES</NavLink>
                    </li>
                    {isLoggedIn ? (<li>
                        <NavLink className="nav text-white" to='/logout'>LOGOUT</NavLink>
                    </li> )
                    :(
                    <>
                    <li>
                        <NavLink className="nav  -mt-12 right-0 absolute mr-[12%] font-mono" to="/login">LOGIN</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav -mt-12 absolute right-0 mr-[3%]" to="/signup">SIGNUP</NavLink>
                    </li>
                    </>
                    )}
                    
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;

