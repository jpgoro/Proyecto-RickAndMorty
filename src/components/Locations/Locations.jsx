import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Locations = () => {
    return (
        <div>
            <ul className="links-container">
                <li>
                    <Link className="primary-btn" to="/Locations/getAllLocations">Get All Locations</Link>
                </li>
                <li>
                    <Link className="primary-btn" to="/Locations/addLocation">Add Location</Link>
                </li>
                <li>
                    <Link className="primary-btn" to="/Locations/getLocation">Get Location</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Locations
