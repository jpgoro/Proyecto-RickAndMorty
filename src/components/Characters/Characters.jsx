import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './links.scss'

const Characters = () => {
    return (
        <div className="sidebar-container">
            <ul className="links-container">
                <li>
                    <Link className="log-btn" to="/Characters/getAllChars">Characters</Link>
                </li>
                <li>
                    <Link className="log-btn" to="/Characters/addChar">Add Character</Link>
                </li>
                <li>
                    <Link className="log-btn" to="/Characters/getChar">Get Character</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Characters
