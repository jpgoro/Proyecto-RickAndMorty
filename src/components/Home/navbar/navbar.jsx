import { Link } from "react-router-dom"
import Burger from "./burger"
import "./navbar.scss"

export default function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/">
                <div className="logo" />
            </Link>
            
            <Burger />
        </nav>

    )
}