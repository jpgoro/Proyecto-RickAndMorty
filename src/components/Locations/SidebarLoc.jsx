import { Link } from 'react-router-dom';

const SidebarLoc = () => {
    return (
        <div className="sidebar-container">
            <ul className="sidebar">             
                <li>
                    <Link className="log-btn" to="/addLocation">Add Location</Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarLoc;
