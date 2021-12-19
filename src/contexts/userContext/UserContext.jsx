import React,{createContext,useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
const UserContext = createContext()

const UserProvider = ({children}) => {
    const [isLogged,setIsLogged] = useState(null)
    const [userInfo,setUserInfo] = useState({})
    const location = useLocation()
    useEffect(() => {
        localStorage.getItem("UserToken") ? setIsLogged(false) : setIsLogged(true)
    }, [])

    useEffect(() => {
        !localStorage.getItem("UserToken") ? setIsLogged(true) : setIsLogged(false)
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

