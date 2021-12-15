import { Link } from "react-router-dom";
import "./home.scss";
import backgroundvideo from "./video/videorickandmorty(corto).mp4"

export default function HomePage() {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="video-container" >
        <source src={backgroundvideo} type="video/mp4" />
      </video>
      <div className="links-container">
        <Link className="log-btn" to="/Characters/getAllChars">Characters</Link>
        <Link className="log-btn" to="/Locations/getAllLocations">Locations</Link>
      </div>
    </div>
  );
}
