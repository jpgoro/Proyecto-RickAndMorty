
import { Link } from "react-router-dom";
import styled from "styled-components";
import GetAll from "../../Characters/getAll/GetAll";
import HomePage from "../home";
import "./rightnav.scss"


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
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 340px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    border-radius: 6px;   
    
`

const RightNavbar = ({ open }) => {
    return (
        <Ul open={open}>
            <Link className="log-btn" to="/Login">Log in</Link>
            <Link className="log-btn" to="/Register">Sign Up</Link>
            {/* <button className="log-btn">Hall of Ricks</button> */}
        </Ul>
    )
}

export default RightNavbar