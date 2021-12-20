import React,{useEffect,useState,useContext} from 'react'
import UserContext from '../../../contexts/userContext/UserContext'
import '../../../scss/app.scss'

const GetAllUsers = () => {
    const {users} = useContext(UserContext)
    const [usersReg,setUsersReg] = useState(users)
    useEffect(()=>{
        setUsersReg(users)
    },[users])

    return (
        <li>{`Created Users : ${usersReg.length}`}</li>
    )
}

export default GetAllUsers;
