import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/users', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete user on delete button
  const deleteuser = async (id) => {
    const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: authorizationToken,
      },
    });
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section border border-gray-300 p-4 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Admin Users Data</h1>
        </div>
        <div className="container mx-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left bg-white text-black">Name</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left bg-white text-black">Email</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left bg-white text-black">Phone</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left bg-white text-black">Update</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left bg-white text-black">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curruser, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300 bg-white text-black">{curruser.username}</td>
                  <td className="py-2 px-4 border-b border-gray-300 bg-white text-black">{curruser.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300 bg-white text-black">{curruser.phone}</td>
                  <td className="py-2 px-4 border-b border-gray-300 bg-white text-black">
                    <Link to={`/admin/users/${curruser._id}/edit`} className="text-black flex gap-2 font-bold bg-white hover:underline">
                      <FaEdit />Edit
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 bg-white text-black">
                    <button
                      onClick={() => deleteuser(curruser._id)}
                      className="text-red-500 font-bold flex gap-2 hover:underline"
                    >
                      <FaTrashAlt />Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
