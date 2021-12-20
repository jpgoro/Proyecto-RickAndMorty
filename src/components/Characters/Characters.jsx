import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../scss/app.scss'
import UserContext from '../../contexts/userContext/UserContext'
import { useContext,useState,useEffect } from 'react'

const Characters = () => {
    const {isLogged} = useContext(UserContext)
    const [seeLogged,setSeeLogged] = useState(isLogged)
    useEffect(()=>{
        setSeeLogged(isLogged)
    },[isLogged])

    return (
        <div>
            <ul className="links-container">
                <li>
                    <Link className="primary-btn" to="/Characters/getAllChars">Characters</Link>
                </li>
                {
                    seeLogged ? <li>
                    <Link className="primary-btn" to="/Characters/addChar">Add Character</Link>
                </li> :
                    <li>
                    <a className="primary-btn" style={{backgroundColor:"#cccccc",color: "#666666" }}>Add Character</a>
                </li>
                }
            </ul>
            <Outlet />
        </div>
    )
}

export default Characters;
