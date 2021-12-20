import React,{useEffect,useState,useContext} from 'react'
import UserContext from '../../../contexts/userContext/UserContext'

const GetAllUsers = () => {
    const {users} = useContext(UserContext)
    const [usersReg,setUsersReg] = useState(users)
    useEffect(()=>{
        setUsersReg(users)
    },[users])

    return (
        <li style={{color:"white",fontSize:"20px",letterSpacing:"2px"}}>{`Created Users : ${usersReg.length}`}</li>
    )
}

export default GetAllUsers
