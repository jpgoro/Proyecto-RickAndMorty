import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../scss/app.scss'

const Characters = () => {
    return (
        <div>
            <ul className="links-container">
                <li>
                    <Link className="primary-btn" to="/Characters/getAllChars">Characters</Link>
                </li>
                <li>
                    <Link className="primary-btn" to="/Characters/addChar">Add Character</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Characters
