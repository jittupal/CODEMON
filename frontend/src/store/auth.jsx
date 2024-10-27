import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("")
  const [course, setCourse] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () =>{
   setToken("");
   return localStorage.removeItem("token");
  };

  const userAuthentication = async () =>{
    setIsLoading(true);
   try {
    const response = await fetch("https://codemon-i5f0.onrender.com/api/auth/user", {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      }
    });

    if(response.ok){
    const data = await response.json();
    // console.log("User data ", data.userData)
    setUser(data.userData);
    setIsLoading(false);
    }else{
      console.log("Error while fetching user data");
      setIsLoading(false);
    }
   } catch (error) {
    console.log(error);
   }
  }

  const getCourse = async () => {
    try {
      const response = await fetch("https://codemon-i5f0.onrender.com/api/data/course", {
        method: "GET",
      });

      if(response.ok){
        const data = await response.json();
        // console.log(data);
        setCourse(data);
      }
    } catch (error) {
      console.log("error from get course from auth file ", error);
    }
  }

  useEffect(()=>{
    getCourse();
    userAuthentication();
  },[]);

  return (
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS , isLoading, LogoutUser, user, course, authorizationToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  return authContextValue;
};
