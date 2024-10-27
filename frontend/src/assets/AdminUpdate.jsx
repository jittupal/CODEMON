import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  console.log("params single user: ", params);
  const { authorizationToken, API } = useAuth();

  // get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`https://codemon-i5f0.onrender.com/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users single data:  ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://codemon-i5f0.onrender.com/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Not Updated ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="admin-users-section border border-gray-300 p-4 ">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Update User Data</h1>
      </div>
      <div className="container mx-auto">
        <section className=" shadow-md rounded p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block  text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-white text-black"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-white text-black"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-white">
                Mobile
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-white text-black"
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
