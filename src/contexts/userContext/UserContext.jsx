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
      .get("https://serverprueba2.herokuapp.com/users/all")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let token = localStorage.getItem("UserToken") || "";
    axios({
      method: "POST",
      url: "https://serverprueba2.herokuapp.com/private",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUserInfo(res.data.user);
        setIsLogged(true);
      })
      .catch((err) => {
        if (localStorage.getItem("UserToken")){ 
          localStorage.removeItem("UserToken");
        setIsLogged(false);
        setUserInfo({username:"",email:""}); 
    }
      });
  }, [location]);

  let data = { isLogged, setIsLogged, userInfo, setUserInfo, users, setUsers };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
