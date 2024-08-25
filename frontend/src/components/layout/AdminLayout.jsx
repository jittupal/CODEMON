import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../store/auth';

const AdminLayout = () => {
  const { user , isLoading } = useAuth();
  console.log("admin layout " , user);

  if(isLoading){
    return <h1>Loading ...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/" />;
  }
  return (
    <>
   <header>
   <div className="container">
    <nav className="flex list-none gap-8 flex-col m-4">
      <li className=''><NavLink to="/admin/users" className="flex gap-2"><FaUser />Users</NavLink></li>
      <li><NavLink to="/admin/contacts">Contacts</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
      <li><NavLink to="/">Home</NavLink></li>
    </nav>
   </div>
   </header>
   <Outlet/>
   </>
  )
}

export default AdminLayout
