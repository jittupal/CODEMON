import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from "react-toastify";


const AdminContacs = () => {
  const [contactData, setContactData] = useState([]);

  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch('https://codemon-i5f0.onrender.com/api/admin/contacts', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log('contact data', data);
      // if(data == 0){
      //   console.log("no contact");
      // }
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //defining the function deletecontactbyid

  const deleteContactById =  async (id) => {
    try {
      const response = await fetch(`https://codemon-i5f0.onrender.com/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization : authorizationToken,
        }
      });
      if(response.ok){
        // if(getContactsData() == 0){
        //   console.log("no contact data");
        // }
        getContactsData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not Delete ");
      
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div>
      <section className="admin-contacts-section border border-gray-300 p-4 ">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Admin Contact Data</h1>
        </div>
        <div className="container mx-auto">
          {contactData.map((curContactData, index) => {
            const { username, email, message, _id } = curContactData;

            return (
              <div key={index} className=" shadow-md rounded p-4 mb-4">
                <h1>{index + 1}</h1>
                <p className="mb-1"><strong>Username:</strong> {username}</p>
                <p className="mb-1"><strong>Email:</strong> {email}</p>
                <p className="mb-1"><strong>Message:</strong> {message}</p>
                <button className="text-red-500 hover:underline flex items-center mt-2" onClick={() => {
                  deleteContactById(_id)
                }}>
                  <FaTrashAlt className="mr-1" /> Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AdminContacs;
