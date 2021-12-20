import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/userContext/UserContext'
import { useContext,useState,useEffect } from 'react'

const Locations = () => {
    const {isLogged} = useContext(UserContext)
    const [seeLogged,setSeeLogged] = useState(isLogged)
    useEffect(()=>{
        setSeeLogged(isLogged)
    },[isLogged])
    return (
        <div>
            <ul className="links-container">
                <li>
                    <Link className="primary-btn" to="/Locations/getAllLocations">All<br/>Locations</Link>
                </li>
                {  seeLogged ? 
                    <li>
                    <Link className="primary-btn" to="/Locations/addLocation" >Add<br/>Location</Link>
                    </li>
                    :
                    <li>
                    <a className="primary-btn" to="/Locations/addLocation"style={{backgroundColor:"#cccccc",color: "#666666" }} >Add Location</a>
                    </li>
                    
                    }
            </ul>
            <Outlet />
        </div>
    )
}

export default Locations;
