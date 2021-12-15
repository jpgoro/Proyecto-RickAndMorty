import { Link } from 'react-router-dom'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <ul className="sidebar">
                <li>
                    <button className='log-btn'><Link to="/getAllChars">All Characters</Link></button>   
                </li>
                <li>
                <button className='log-btn'><Link to="/addChar">Add Character</Link></button> 
                </li>
                <li>
                <button className='log-btn'><Link  to="/getChar">Search Character</Link></button> 
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
