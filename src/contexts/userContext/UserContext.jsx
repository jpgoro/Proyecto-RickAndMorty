import React,{createContext,useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios"
const UserContext = createContext()

const UserProvider = ({children}) => {
    const [isLogged,setIsLogged] = useState(false)
    const [userInfo,setUserInfo] = useState({})
    const location = useLocation()
  /*   useEffect(() => {
        localStorage.getItem("UserToken") ? setIsLogged(true) : setIsLogged(false)
    }, []) */
    useEffect(() => {
        let token = localStorage.getItem("UserToken") || ""
        axios({
            method:"POST",
            url:"http://localhost:5002/private",
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(res=> setIsLogged(true) )
        .catch(err=> {
            if(localStorage.getItem("UserToken")) localStorage.removeItem("UserToken")
            setIsLogged(false)
            setUserInfo({}) 
        })
        
    }, [location])

    let data = {isLogged,setIsLogged,userInfo,setUserInfo}
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}

export default UserContext

