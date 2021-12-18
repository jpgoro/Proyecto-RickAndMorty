import React,{useEffect,useState} from 'react'
import axios from 'axios'
const GetAllUsers = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get("")
        .then(res=>setUsers(res.results))
        .catch(err=>console.log(err))
    }, [])
    return (
        <ul>
            {users.map((el,i)=><li key={i}>{el.name}</li>)}
        </ul>
    )
}

export default GetAllUsers
