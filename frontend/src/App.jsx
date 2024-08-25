import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
// import Services from './assets/Services'
import Courses from './assets/Courses'
import Login from './assets/Login'
import Signup from './assets/Signup'
import Navbar from './components/Navbar'
import Error from './assets/Error'
import Design from './assets/Design'
import Logout from './assets/Logout'
import Footer from './assets/Footer'
import AdminLayout from './components/layout/AdminLayout'
import AdminUsers from './assets/AdminUsers'
import AdminContacs from './assets/AdminContacs'
import { AdminUpdate } from './assets/AdminUpdate'

// import {Chatapp} from "../chatapp/MERN-SocialMedia-ZAINKEEPSCODE-master/client/src/App";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/admin' element={<AdminLayout/>}>
      <Route path='users' element={<AdminUsers/>}/>
      <Route path='contacts' element={<AdminContacs/>}/>
      <Route path="users/:id/edit" element={<AdminUpdate />} />
      </Route>
     

    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
