
import { Link } from "react-router-dom";
import styled from "styled-components";



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
    height: 260px;
    width: 230px;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    border-radius: 6px;   
    
`

const RightNavbar = ({ open }) => {
    return (
        <Ul open={open}>
            <Link className="primary-btn" to="/Login">Log in</Link>
            <Link className="primary-btn" to="/Register">Sign Up</Link>
        </Ul>
    )
}

export default RightNavbar