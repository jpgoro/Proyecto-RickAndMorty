import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState} from "react";
import UserContext from "../../../contexts/userContext/UserContext";
import GetAllUsers from "../../Users/GetAllUsers/GetAllUsers";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 1rem;
  flex-flow: row nowrap;
  gap: 1rem;
  flex-flow: column nowrap;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  padding: 1rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 260px;
  width: 230px;
  padding-top: 3.5rem;
  transition: transform 0.4s ease-in-out;
  border-radius: 6px;
`;

const RightNavbar = ({ open }) => {
    const {isLogged,setIsLogged,userInfo,setUserInfo} = useContext(UserContext)
    const [data,setDataUser] = useState(userInfo)
    console.log(data)
    const deleteSession= ()=>{
        setIsLogged(false)
        setUserInfo({})
        localStorage.removeItem("UserToken")
    }
    useEffect(()=>{
        setDataUser(userInfo)
    },[userInfo])
    return (
        <Ul open={open}>
            {
                isLogged ?
                    (   <>
                        <h3 style={{color:"white"}} >{`Hola ${data.username || "ASD"}!!`}</h3>
                        <Link className="primary-btn" to="/" onClick={()=> deleteSession()}>Log out</Link>
                        <Link className="primary-btn" to="/editUser">Edit Account</Link>
                        </>
                    )
                    :
                    (
                        <>
                        <Link className="primary-btn" to="/Login">Log in</Link>
                        <Link className="primary-btn" to="/Register">Sign Up</Link>
                        </>
                    )
                
            }
            <GetAllUsers></GetAllUsers>
        </Ul>
    )
}

export default RightNavbar;
