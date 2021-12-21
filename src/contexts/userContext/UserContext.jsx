import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({username:"",email:""});
  const [users, setUsers] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:5002/users/all")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let token = localStorage.getItem("UserToken") || "";
    axios({
      method: "POST",
      url: "http://localhost:5002/private",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data)
        setUserInfo(res.data.user);
        setIsLogged(true);
        console.log(isLogged,"gola")
      })
      .catch((err) => {
        if (localStorage.getItem("UserToken")){ 
          localStorage.removeItem("UserToken");
        setIsLogged(false);
        console.log("hola")
        setUserInfo({username:"",email:""}); 
    }
      });
  }, [location]);

  let data = { isLogged, setIsLogged, userInfo, setUserInfo, users, setUsers };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
